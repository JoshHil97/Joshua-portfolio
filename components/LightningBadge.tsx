// components/LightningBadge.tsx

type LightningBadgeProps = {
  label: string;
};

export default function LightningBadge({ label }: LightningBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-[#6C63FF]/40 bg-[#0A0E27]/70 px-3 py-1 text-xs font-medium text-[#9AE1FF] shadow-[0_0_12px_rgba(108,99,255,0.4)]">
      <span className="text-[0.9em]">⚡</span>
      <span>{label}</span>
    </span>
  );
}
