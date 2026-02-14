import React, { useMemo, useState } from 'react';
import TeamCard from './components/TeamCard';
import SearchBar from './components/SearchBar';
import ChampionCard from './components/ChampionCard';
import { getChampions } from './data/champions';

export default function App() {
  const allChampions = useMemo(() => getChampions(), []);
  const [search, setSearch] = useState('');
  const [bluePicks, setBluePicks] = useState({});
  const [redPicks, setRedPicks] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null); // { team: 'blue'|'red', role: string }

  const filteredChampions = useMemo(() => {
    if (!search.trim()) return allChampions;
    const q = search.trim().toLowerCase();
    return allChampions.filter((c) => c.name.toLowerCase().includes(q));
  }, [allChampions, search]);

  const handleChampionClick = (champion) => {
    if (!selectedSlot) return;
    const setter = selectedSlot.team === 'blue' ? setBluePicks : setRedPicks;
    setter((prev) => ({ ...prev, [selectedSlot.role]: { ...champion, image: champion.image || champion.image } }));
    setSelectedSlot(null);
  };

  const handleRoleClick = (team, role) => {
    setSelectedSlot((prev) =>
      prev?.team === team && prev?.role === role ? null : { team, role }
    );
  };

  const handleReset = () => {
    setBluePicks({});
    setRedPicks({});
    setSelectedSlot(null);
    setSearch('');
  };

  return (
    <div className="h-screen bg-bg-dark flex flex-col py-4 sm:py-6 px-4 sm:px-6 gap-4 w-full overflow-hidden">
      <header className="shrink-0 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-5 py-4 rounded-card border border-border bg-bg-medium">
        <div className="flex flex-col gap-0.5">
          <h1 className="font-bold text-xl sm:text-3xl text-gold font-inter tracking-tight">
            League Draft Analyzer
          </h1>
          <p className="text-white/90 text-xs sm:text-sm font-inter">
            Drag & drop champions to analyze team compositions
          </p>
          <p className="text-text-gray text-xs mt-0.5 font-inter">
            by Satvik
          </p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#1E293B] font-semibold text-sm font-inter hover:bg-gray-100 transition-colors w-full sm:w-auto"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Reset
        </button>
      </header>
      <main className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-2 p-2 w-full flex-1 min-h-0 min-w-0 overflow-hidden">
        {/* Left: scroll container (no padding) → inner wrapper (padding) */}
        <div className="flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden lg:flex-none [scrollbar-gutter:stable]">
          <div className="p-2">
            <TeamCard
              side="blue"
              picks={bluePicks}
              onRoleClick={(role) => handleRoleClick('blue', role)}
              selectedSlot={selectedSlot?.team === 'blue' ? selectedSlot.role : null}
            />
          </div>
        </div>

        {/* Middle: single scroll container, fills available flex space */}
        <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden [scrollbar-gutter:stable]">
          <div className="px-2 pt-2 pb-1">
            <SearchBar value={search} onChange={setSearch} placeholder="Search  Champions..." />
          </div>
          <div className="min-w-0 px-2 pb-2 flex flex-row flex-wrap gap-3 sm:gap-4">
            {filteredChampions.map((champ) => (
              <ChampionCard
                key={champ.name}
                champion={champ}
                selected={
                  selectedSlot &&
                  ((selectedSlot.team === 'blue' && bluePicks[selectedSlot.role]?.name === champ.name) ||
                    (selectedSlot.team === 'red' && redPicks[selectedSlot.role]?.name === champ.name))
                }
                onClick={handleChampionClick}
              />
            ))}
          </div>
        </div>

        {/* Right: scroll container (no padding) → inner wrapper (padding) */}
        <div className="flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden lg:flex-none [scrollbar-gutter:stable]">
          <div className="p-2">
            <TeamCard
              side="red"
              picks={redPicks}
              onRoleClick={(role) => handleRoleClick('red', role)}
              selectedSlot={selectedSlot?.team === 'red' ? selectedSlot.role : null}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
