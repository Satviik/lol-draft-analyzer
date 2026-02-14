import React from 'react';
import RoleIcon from './RoleIcon';

export default function RoleSlot({ role, label, team = 'blue', selectedChampion, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(role)}
      className={`flex flex-row justify-center items-center gap-3 rounded-slot border bg-card-bg w-full max-w-[357px] h-24 px-4 cursor-pointer text-left ${
        isSelected ? 'border-2 border-gold' : 'border border-border border-dashed'
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-1.5 py-[15px] w-[69px]">
        <RoleIcon role={role} />
        <span className="font-normal text-xs leading-tight text-text-gray font-inter">
          {label}
        </span>
      </div>
      {selectedChampion && (
        <div className="flex items-center gap-2 ml-2">
          <img
            src={selectedChampion.image}
            alt={selectedChampion.name}
            className="w-10 h-10 rounded-lg object-cover border border-border"
          />
          <span className="text-text-gray text-xs font-inter">{selectedChampion.name}</span>
        </div>
      )}
    </button>
  );
}
