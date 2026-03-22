"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type Phase = "idle" | "running" | "over";

type Pipe = {
  x: number;
  gapY: number;
  passed: boolean;
};

type GameState = {
  birdY: number;
  velocity: number;
  pipes: Pipe[];
  frame: number;
  score: number;
};

type LeaderboardEntry = {
  name: string;
  score: number;
  createdAt: string;
};

const STORAGE_KEY = "jh_tardis_runner_leaderboard_v1";
const PLAYER_NAME_KEY = "jh_tardis_runner_player_name";
const MAX_LEADERBOARD = 10;

const WORLD = {
  width: 420,
  height: 620,
  birdX: 92,
  birdSize: 24,
  gravity: 0.34,
  flapVelocity: -6.2,
  pipeSpeed: 2.8,
  pipeWidth: 66,
  gapHeight: 166,
  spawnEveryFrames: 95,
  minimumGapPadding: 48,
} as const;

function createInitialState(): GameState {
  return {
    birdY: WORLD.height / 2 - WORLD.birdSize / 2,
    velocity: 0,
    pipes: [],
    frame: 0,
    score: 0,
  };
}

function normaliseName(raw: string): string {
  const cleaned = raw.replace(/[^a-zA-Z0-9 _-]/g, "").trim().slice(0, 16);
  return cleaned.length > 0 ? cleaned : "Player";
}

function readLeaderboard(): LeaderboardEntry[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) ?? "[]",
    ) as unknown;

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .filter((entry): entry is LeaderboardEntry => {
        if (typeof entry !== "object" || entry === null) {
          return false;
        }
        const value = entry as Partial<LeaderboardEntry>;
        return (
          typeof value.name === "string" &&
          typeof value.score === "number" &&
          Number.isFinite(value.score) &&
          typeof value.createdAt === "string"
        );
      })
      .map((entry) => ({
        ...entry,
        name: normaliseName(entry.name),
        score: Math.max(0, Math.floor(entry.score)),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_LEADERBOARD);
  } catch {
    return [];
  }
}

function randomGapY(): number {
  const halfGap = WORLD.gapHeight / 2;
  const minY = halfGap + WORLD.minimumGapPadding;
  const maxY = WORLD.height - halfGap - WORLD.minimumGapPadding;
  return minY + Math.random() * (maxY - minY);
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  state: GameState,
  phase: Phase,
  bestScore: number,
): void {
  const { width, height } = WORLD;

  const background = ctx.createLinearGradient(0, 0, 0, height);
  background.addColorStop(0, "#070B1E");
  background.addColorStop(1, "#04050C");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 75; i += 1) {
    const seed = i * 71.3;
    const x = (seed * 19.7) % width;
    const y = (seed * 13.9 + state.frame * 0.55) % height;
    const size = i % 7 === 0 ? 2 : 1;
    ctx.globalAlpha = i % 9 === 0 ? 0.75 : 0.45;
    ctx.fillStyle = "#F8FAFC";
    ctx.fillRect(x, y, size, size);
  }
  ctx.globalAlpha = 1;

  const gapHalf = WORLD.gapHeight / 2;
  for (const pipe of state.pipes) {
    const topPipeHeight = pipe.gapY - gapHalf;
    const bottomPipeY = pipe.gapY + gapHalf;

    const rift = ctx.createLinearGradient(pipe.x, 0, pipe.x + WORLD.pipeWidth, 0);
    rift.addColorStop(0, "#4C1D95");
    rift.addColorStop(0.55, "#6D28D9");
    rift.addColorStop(1, "#A855F7");
    ctx.fillStyle = rift;
    ctx.fillRect(pipe.x, 0, WORLD.pipeWidth, topPipeHeight);
    ctx.fillRect(
      pipe.x,
      bottomPipeY,
      WORLD.pipeWidth,
      WORLD.height - bottomPipeY,
    );

    ctx.fillStyle = "#C4B5FD";
    ctx.fillRect(pipe.x - 3, topPipeHeight - 11, WORLD.pipeWidth + 6, 11);
    ctx.fillRect(pipe.x - 3, bottomPipeY, WORLD.pipeWidth + 6, 11);
  }

  const tardisX = WORLD.birdX - 8;
  const tardisY = state.birdY - 10;
  const tardisW = 40;
  const tardisH = 52;

  const body = ctx.createLinearGradient(tardisX, tardisY, tardisX + tardisW, tardisY + tardisH);
  body.addColorStop(0, "#1D4ED8");
  body.addColorStop(1, "#1E3A8A");
  ctx.fillStyle = body;
  ctx.fillRect(tardisX, tardisY + 6, tardisW, tardisH - 6);

  ctx.fillStyle = "#93C5FD";
  ctx.fillRect(tardisX + 6, tardisY, tardisW - 12, 8);
  ctx.fillStyle = "#E0F2FE";
  ctx.fillRect(tardisX + tardisW / 2 - 2, tardisY - 5, 4, 5);

  ctx.fillStyle = "#E2E8F0";
  for (let row = 0; row < 3; row += 1) {
    const y = tardisY + 14 + row * 11;
    ctx.fillRect(tardisX + 6, y, 7, 8);
    ctx.fillRect(tardisX + tardisW - 13, y, 7, 8);
  }

  ctx.strokeStyle = "#DBEAFE";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(tardisX + tardisW / 2, tardisY + 12);
  ctx.lineTo(tardisX + tardisW / 2, tardisY + tardisH - 6);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.96)";
  ctx.font = "700 38px Arial";
  ctx.textAlign = "center";
  ctx.fillText(String(state.score), width / 2, 56);

  ctx.fillStyle = "rgba(255,255,255,0.72)";
  ctx.font = "600 14px Arial";
  ctx.textAlign = "left";
  ctx.fillText(`Best ${bestScore}`, 16, 28);

  if (phase === "idle" || phase === "over") {
    ctx.fillStyle = "rgba(5,7,22,0.62)";
    ctx.fillRect(24, height / 2 - 86, width - 48, 152);
    ctx.strokeStyle = "rgba(154,225,255,0.35)";
    ctx.strokeRect(24, height / 2 - 86, width - 48, 152);

    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.textAlign = "center";
    ctx.font = "700 24px Arial";
    ctx.fillText(
      phase === "over" ? "Time crash" : "TARDIS Runner",
      width / 2,
      height / 2 - 28,
    );

    ctx.font = "500 14px Arial";
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fillText("Tap, click, or press Space to boost", width / 2, height / 2);
    ctx.fillText(
      phase === "over"
        ? "Use Run again or save your score"
        : "Guide the TARDIS through time rifts",
      width / 2,
      height / 2 + 24,
    );
  }
}

export default function TardisRunnerGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const stateRef = useRef<GameState>(createInitialState());
  const phaseRef = useRef<Phase>("idle");

  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);
  const [roundScore, setRoundScore] = useState<number | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() =>
    readLeaderboard(),
  );
  const [playerName, setPlayerName] = useState(() => {
    if (typeof window === "undefined") {
      return "Pilot";
    }
    const cachedName = window.localStorage.getItem(PLAYER_NAME_KEY);
    return cachedName ? normaliseName(cachedName) : "Pilot";
  });
  const [bestScore, setBestScore] = useState(() => readLeaderboard()[0]?.score ?? 0);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const resetRound = useCallback(() => {
    stateRef.current = createInitialState();
    setScore(0);
    setRoundScore(null);
  }, []);

  const setPhaseState = useCallback((next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  }, []);

  const finishRound = useCallback(
    (finalScore: number) => {
      if (phaseRef.current !== "running") {
        return;
      }
      setPhaseState("over");
      setRoundScore(finalScore);
      setBestScore((previous) => Math.max(previous, finalScore));
    },
    [setPhaseState],
  );

  const startRound = useCallback(() => {
    setStatusMessage(null);
    resetRound();
    setPhaseState("running");
    stateRef.current.velocity = WORLD.flapVelocity;
  }, [resetRound, setPhaseState]);

  const flap = useCallback(() => {
    if (phaseRef.current === "running") {
      stateRef.current.velocity = WORLD.flapVelocity;
      return;
    }
    startRound();
  }, [startRound]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(PLAYER_NAME_KEY, normaliseName(playerName));
  }, [playerName]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leaderboard));
  }, [leaderboard]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();
        flap();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [flap]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const frame = () => {
      const state = stateRef.current;
      const currentPhase = phaseRef.current;

      if (currentPhase === "running") {
        state.frame += 1;
        state.velocity += WORLD.gravity;
        state.birdY += state.velocity;

        if (state.frame % WORLD.spawnEveryFrames === 0) {
          state.pipes.push({
            x: WORLD.width + WORLD.pipeWidth,
            gapY: randomGapY(),
            passed: false,
          });
        }

        for (const pipe of state.pipes) {
          pipe.x -= WORLD.pipeSpeed;
          if (!pipe.passed && pipe.x + WORLD.pipeWidth < WORLD.birdX) {
            pipe.passed = true;
            state.score += 1;
            setScore(state.score);
          }
        }

        state.pipes = state.pipes.filter((pipe) => pipe.x + WORLD.pipeWidth > -8);

        const birdBottom = state.birdY + WORLD.birdSize;
        let collided = state.birdY <= 0 || birdBottom >= WORLD.height;

        if (!collided) {
          for (const pipe of state.pipes) {
            const overlapsX =
              WORLD.birdX + WORLD.birdSize > pipe.x &&
              WORLD.birdX < pipe.x + WORLD.pipeWidth;

            if (!overlapsX) {
              continue;
            }

            const gapTop = pipe.gapY - WORLD.gapHeight / 2;
            const gapBottom = pipe.gapY + WORLD.gapHeight / 2;
            if (state.birdY < gapTop || birdBottom > gapBottom) {
              collided = true;
              break;
            }
          }
        }

        if (collided) {
          finishRound(state.score);
        }
      }

      drawFrame(context, stateRef.current, phaseRef.current, bestScore);
      animationRef.current = window.requestAnimationFrame(frame);
    };

    animationRef.current = window.requestAnimationFrame(frame);

    return () => {
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [bestScore, finishRound]);

  const onSaveScore = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (roundScore === null) {
      return;
    }

    const entry: LeaderboardEntry = {
      name: normaliseName(playerName),
      score: roundScore,
      createdAt: new Date().toISOString(),
    };

    setLeaderboard((previous) =>
      [...previous, entry]
        .sort((a, b) => b.score - a.score)
        .slice(0, MAX_LEADERBOARD),
    );
    setPhaseState("idle");
    resetRound();
    setStatusMessage("Score saved to local leaderboard.");
  };

  const clearLeaderboard = () => {
    setLeaderboard([]);
    setBestScore(0);
    setStatusMessage("Leaderboard cleared.");
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
      <section className="rounded-3xl border border-white/10 bg-[#090B1C] p-4 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9AE1FF]">
              Mini game
            </p>
            <h2 className="text-2xl font-semibold text-white">TARDIS Runner</h2>
          </div>
          <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/75">
            Score {score}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <canvas
            ref={canvasRef}
            width={WORLD.width}
            height={WORLD.height}
            className="mx-auto block w-full max-w-[420px] touch-none"
            onClick={flap}
            onTouchStart={(event) => {
              event.preventDefault();
              flap();
            }}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={flap}
            className="rounded-full bg-gradient-to-r from-[#6C63FF] via-[#9AE1FF] to-[#6C63FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#050716] shadow-[0_0_22px_rgba(154,225,255,0.8)] transition hover:brightness-110"
          >
            {phase === "running" ? "Boost" : "Start run"}
          </button>
          <button
            type="button"
            onClick={startRound}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:border-[#9AE1FF]/70 hover:text-white"
          >
            Run again
          </button>
        </div>

        <p className="mt-3 text-xs text-white/60">
          Controls: tap, click, or press Space/Arrow Up.
        </p>

        {phase === "over" && roundScore !== null && (
          <form
            onSubmit={onSaveScore}
            className="mt-5 rounded-2xl border border-white/10 bg-[#101326] p-4"
          >
            <p className="text-sm text-white/90">
              Round score: <strong>{roundScore}</strong>
            </p>
            <label className="mt-3 block text-xs uppercase tracking-[0.16em] text-white/55">
              Leaderboard name
              <input
                value={playerName}
                onChange={(event) => setPlayerName(event.target.value)}
                maxLength={16}
                className="mt-2 w-full rounded-xl border border-white/15 bg-[#050716] px-3 py-2 text-sm text-white outline-none transition focus:border-[#9AE1FF]/70"
              />
            </label>
            <button
              type="submit"
              className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#050716] transition hover:bg-white/90"
            >
              Save score
            </button>
          </form>
        )}
      </section>

      <aside className="rounded-3xl border border-white/10 bg-[#090B1C] p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">Leaderboard</h3>
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-white/65">
            Top {MAX_LEADERBOARD}
          </span>
        </div>
        <p className="mt-2 text-xs text-white/60">Stored in your browser only.</p>

        <ol className="mt-4 space-y-2">
          {leaderboard.length === 0 && (
            <li className="rounded-xl border border-white/10 bg-[#101326] px-3 py-2 text-xs text-white/65">
              No scores yet. Be the first on your board.
            </li>
          )}
          {leaderboard.map((entry, index) => (
            <li
              key={`${entry.name}-${entry.score}-${entry.createdAt}-${index}`}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-[#101326] px-3 py-2 text-sm text-white/85"
            >
              <span>
                <span className="mr-2 text-white/50">#{index + 1}</span>
                {entry.name}
              </span>
              <span className="font-semibold text-[#9AE1FF]">{entry.score}</span>
            </li>
          ))}
        </ol>

        <button
          type="button"
          onClick={clearLeaderboard}
          className="mt-4 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/75 transition hover:border-white/30 hover:text-white"
        >
          Clear leaderboard
        </button>

        {statusMessage && (
          <p className="mt-3 text-xs text-[#9AE1FF]">{statusMessage}</p>
        )}
      </aside>
    </div>
  );
}
