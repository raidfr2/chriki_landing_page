export default function PhoneMockup() {
  return (
    <div className="relative animate-float">
      {/* Glow */}
      <div className="absolute -inset-8 rounded-[3rem] bg-emerald-400/30 blur-3xl" />

      <div className="relative w-[280px] rounded-[2.6rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl shadow-emerald-900/40 sm:w-[310px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

        <div className="relative h-[600px] overflow-hidden rounded-[2rem] bg-slate-50">
          {/* App header */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 px-5 pb-6 pt-9 text-white">
            <div className="flex items-center justify-between">
              <span className="font-arabic text-2xl font-extrabold">شريكي</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <span className="text-sm">👤</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-emerald-50/90">Where do you want to go?</p>
            {/* Search */}
            <div className="mt-2 space-y-2 rounded-2xl bg-white p-3 shadow-lg">
              <div className="flex items-center gap-2 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium">Place des Martyrs</span>
              </div>
              <div className="h-px bg-slate-100" />
              <div className="flex items-center gap-2 text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span className="text-sm font-medium">Bab Ezzouar, USTHB</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-3 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Suggested routes
            </p>

            {/* Route card 1 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">
                    🚌 Bus 65
                  </span>
                  <span className="text-slate-300">→</span>
                  <span className="rounded-lg bg-sky-100 px-2 py-1 text-xs font-bold text-sky-700">
                    🚇 Métro
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-900">32 min</span>
              </div>
              <div className="mt-2.5 flex items-center gap-3 text-[11px] text-slate-500">
                <span>2 changes</span>
                <span>•</span>
                <span>50 DA</span>
                <span>•</span>
                <span className="font-semibold text-emerald-600">Fastest</span>
              </div>
            </div>

            {/* Route card 2 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">
                    🚌 Bus 32
                  </span>
                  <span className="text-slate-300">→</span>
                  <span className="rounded-lg bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700">
                    🚌 Bus 12
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-900">41 min</span>
              </div>
              <div className="mt-2.5 flex items-center gap-3 text-[11px] text-slate-500">
                <span>1 change</span>
                <span>•</span>
                <span>40 DA</span>
                <span>•</span>
                <span className="font-semibold text-sky-600">Cheapest</span>
              </div>
            </div>

            {/* Live banner */}
            <div className="flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-3 text-white">
              <span className="relative flex h-2.5 w-2.5">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-white" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <span className="text-xs font-semibold">Bus 65 arriving in 3 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
