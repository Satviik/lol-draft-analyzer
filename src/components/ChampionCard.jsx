import React from 'react';
import { getChampionImageUrl } from '../data/champions';

export default function ChampionCard({ champion, selected, onClick }) {
  const imageUrl = champion.image || getChampionImageUrl(champion.name);

  return (
    <button
      type="button"
      onClick={() => onClick(champion)}
      className={`flex flex-col justify-center items-center gap-1.5 p-2 w-24 h-[120px] rounded-champ border bg-card-bg font-inter shrink-0 transition-all hover:border-opacity-80 ${
        selected ? 'border-gold border-2 shadow-gold-glow' : 'border-[rgba(51,65,85,0.4)]'
      }`}
    >
      <div className="rounded-champ-img overflow-hidden w-16 h-16 shrink-0 bg-bg-medium flex items-center justify-center">
        <img
          src={imageUrl}
          alt={champion.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect fill="%231E293B" width="64" height="64"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2394A3B8" font-size="10">?</text></svg>';
          }}
        />
      </div>
      <span className="font-normal text-[15px] leading-tight text-text-gray text-center truncate w-full">
        {champion.name}
      </span>
    </button>
  );
}
