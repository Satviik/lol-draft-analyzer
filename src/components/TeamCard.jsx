import React from 'react';
import RoleSlot from './RoleSlot';

const ROLES = [
  { role: 'Top', label: 'Top' },
  { role: 'Jungle', label: 'Jungle' },
  { role: 'Mid', label: 'Mid' },
  { role: 'ADC', label: 'ADC' },
  { role: 'Support', label: 'Support' },
];

export default function TeamCard({ side = 'blue', picks = {}, onRoleClick, selectedSlot }) {
  const isBlue = side === 'blue';
  const dotColor = isBlue ? 'bg-blue-team' : 'bg-red-team';
  const titleColor = isBlue ? 'text-blue-team' : 'text-red-team';
  const title = isBlue ? 'Blue Side' : 'Red Side';

  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-[389px] lg:w-[389px] rounded-card border border-border bg-bg-medium shrink-0">
      <header className="flex flex-row justify-center items-center gap-2 py-2.5">
        <div className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`} />
        <span className={`font-medium text-xl font-inter ${titleColor}`}>{title}</span>
      </header>
      <div className="flex flex-col gap-4">
        {ROLES.map(({ role, label }) => (
          <RoleSlot
            key={role}
            role={role}
            label={label}
            team={side}
            selectedChampion={picks[role]}
            isSelected={selectedSlot === role}
            onClick={onRoleClick}
          />
        ))}
      </div>
    </div>
  );
}
