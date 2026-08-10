import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import type { Fixture } from './types/fixture';
import { fetchFixtures } from './services/fixtures';
import { WeekSelector } from './components/Controls/WeekSelector';
import { PosterActions } from './components/Controls/PosterActions';
import { PosterCanvas } from './components/Poster/PosterCanvas';
import { LoadingState } from './components/UI/LoadingState';
import { ErrorState } from './components/UI/ErrorState';
import { Shield, Sparkles, Trophy, Info, Sliders } from 'lucide-react';

export default function App() {
  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Test simulation filter for testing dynamic grid (default is 'all' = API real data)
  const [simulatedCount, setSimulatedCount] = useState<number | 'all'>('all');

  const posterRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.45);

  // Fetch fixtures from backend API
  const loadWeekData = useCallback(async (week: number) => {
    setIsLoading(true);
    setError(null);

    const result = await fetchFixtures({ season: '2026-2027', week });

    if (result.success === true) {
      setFixtures(result.matches || []);
    } else {
      setError(result.error || 'Sahadan verileri çekilemedi.');
      setFixtures([]);
    }

    setIsLoading(false);
  }, []);

  // Initial load & week change handler
  useEffect(() => {
    loadWeekData(currentWeek);
  }, [currentWeek, loadWeekData]);

  // Adjust preview scale dynamically based on available window width
  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      // Target width is 1080px. Leave padding.
      const calculatedScale = Math.min(Math.max((containerWidth - 32) / 1080, 0.25), 0.7);
      setScale(calculatedScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Compute displayed fixtures (respecting simulation toggle for testing 8, 9, 10, 12 matches)
  const displayedFixtures = useMemo(() => {
    if (simulatedCount === 'all' || fixtures.length === 0) {
      return fixtures;
    }
    const targetCount = Number(simulatedCount);
    if (fixtures.length >= targetCount) {
      return fixtures.slice(0, targetCount);
    }
    // If target count > fixtures.length, duplicate items safely with unique IDs for test simulation
    const result: Fixture[] = [...fixtures];
    let idx = 0;
    while (result.length < targetCount) {
      const template = fixtures[idx % fixtures.length];
      result.push({
        ...template,
        id: `${template.id}-sim-${result.length}`,
      });
      idx++;
    }
    return result;
  }, [fixtures, simulatedCount]);

  return (
    <div className="min-h-screen bg-[#03090C] text-slate-100 flex flex-col font-sans selection:bg-[#00AFAF] selection:text-black">
      {/* App Header Bar */}
      <header className="w-full bg-[#061820]/90 border-b border-cyan-900/50 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF6500] to-orange-500 flex items-center justify-center text-white font-black shadow-lg shadow-orange-500/20">
              <Shield className="w-5 h-5 fill-white text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-black font-montserrat tracking-wider uppercase text-white">
                  ALT LİGLER
                </h1>
                <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                  POSTER MOTORU
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                Trendyol 1. Lig 1080x1350 Sosyal Medya Grafik Oluşturucu
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-1.5 bg-[#09222B] px-3 py-1.5 rounded-xl border border-cyan-500/30">
              <Trophy className="w-3.5 h-3.5 text-cyan-400" />
              <span>Trendyol 1. Lig</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#09222B] px-3 py-1.5 rounded-xl border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6500]" />
              <span>1080 × 1350 px</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 flex flex-col gap-6">
        {/* Controls Bar */}
        <WeekSelector
          currentWeek={currentWeek}
          totalWeeks={38}
          onWeekChange={(w) => setCurrentWeek(w)}
          onRefresh={() => loadWeekData(currentWeek)}
          isLoading={isLoading}
        />

        {/* Content Area */}
        <div
          ref={containerRef}
          className="w-full flex flex-col items-center justify-center min-h-[500px] bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-4 md:p-8 relative overflow-hidden"
        >
          {isLoading && (
            <div className="w-full max-w-md h-[400px]">
              <LoadingState />
            </div>
          )}

          {!isLoading && error && (
            <div className="w-full max-w-md h-[350px]">
              <ErrorState message={error} onRetry={() => loadWeekData(currentWeek)} />
            </div>
          )}

          {!isLoading && !error && fixtures.length === 0 && (
            <div className="w-full max-w-md h-[300px]">
              <ErrorState
                message={`Hafta ${currentWeek} için maç verisi bulunamadı.`}
                onRetry={() => loadWeekData(currentWeek)}
              />
            </div>
          )}

          {!isLoading && !error && fixtures.length > 0 && (
            <div className="flex flex-col items-center w-full my-2">
              {/* Info Pill & Test Simulator Selector */}
              <div className="flex flex-wrap items-center justify-between gap-3 w-full max-w-2xl mb-4 bg-[#061820]/90 border border-cyan-900/50 p-2.5 px-4 rounded-2xl text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-200">
                  <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>
                    Gösterilen: <strong className="text-[#FF6500] font-extrabold">{displayedFixtures.length} Maç</strong> (Dinamik Grid)
                  </span>
                </div>

                {/* Grid Simulation Selector */}
                <div className="flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-300 text-[11px]">Grid Testi:</span>
                  <select
                    value={simulatedCount}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSimulatedCount(val === 'all' ? 'all' : Number(val));
                    }}
                    className="bg-[#030B0F] text-cyan-300 border border-cyan-500/40 rounded-lg px-2.5 py-1 text-xs font-mono font-bold focus:outline-none focus:border-cyan-400 cursor-pointer"
                  >
                    <option value="all">Gerçek API ({fixtures.length} Maç)</option>
                    <option value="8">8 Maç Simülasyonu</option>
                    <option value="9">9 Maç Simülasyonu</option>
                    <option value="10">10 Maç Simülasyonu</option>
                    <option value="12">12 Maç Simülasyonu</option>
                  </select>
                </div>
              </div>

              {/* Scaled Preview Wrapper */}
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300"
                style={{
                  width: `${1080 * scale}px`,
                  height: `${1350 * scale}px`,
                }}
              >
                <div
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                  }}
                  className="absolute top-0 left-0 w-[1080px] h-[1350px]"
                >
                  <PosterCanvas
                    ref={posterRef}
                    week={currentWeek}
                    season="2026-2027"
                    leagueName="TRENDYOL 1. LİG"
                    matches={displayedFixtures}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Controls (PNG Download Button) */}
        {!isLoading && !error && displayedFixtures.length > 0 && (
          <PosterActions posterRef={posterRef} week={currentWeek} disabled={isLoading} />
        )}
      </main>

      {/* Footer Bar */}
      <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 py-4 text-center text-xs text-zinc-500 font-mono">
        ALT LİGLER © 2026-2027 • Trendyol 1. Lig Maç Sonuçları Grafik Platformu
      </footer>
    </div>
  );
}

