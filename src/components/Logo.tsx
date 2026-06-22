export default function Logo({
  light = false,
  size = "md",
}: {
  light?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "lg" ? "h-12 w-12" : size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const text =
    size === "lg" ? "text-4xl" : size === "sm" ? "text-2xl" : "text-3xl";
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${box} flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-500/30`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-1/2 w-1/2 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 6v6" />
          <path d="M15 6v6" />
          <path d="M2 12h19.6" />
          <path d="M18 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="15" cy="18" r="2" />
        </svg>
      </div>
      <span
        className={`font-arabic font-extrabold leading-none ${text} ${
          light ? "text-white" : "text-emerald-900"
        }`}
      >
        شريكي
      </span>
    </div>
  );
}
