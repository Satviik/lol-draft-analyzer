import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import RoleIcon from './RoleIcon';

export default function RoleSlot({ role, label, team = 'blue', slotId, selectedChampion, isTarget = false, lockedRole = null, onClearSlot, onClick, onLockRole, isOverlay }) {
  const dropSlotId = `${team}-${role.toLowerCase()}`;
  
  // Check if this slot is the locked role
  const isLockedSlot = lockedRole?.team === team && lockedRole?.role === role;

  const { setNodeRef, isOver } = useDroppable({
    id: dropSlotId,
    data: { type: 'slot', team, role, slotId: dropSlotId },
    disabled: false, // Allow drops on all slots - handleDragEnd will validate
  });

  const isDropActive = isOver && !isOverlay;
  const isFilled = !!selectedChampion;

  const handleClearClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (onClearSlot && slotId) {
      onClearSlot(slotId);
    }
  };

  const handleLockClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (onLockRole) {
      onLockRole(role);
    }
  };

  return (
    <button
      ref={setNodeRef}
      type="button"
      onClick={() => onClick?.(role)}
      className={`relative flex flex-row items-center gap-4 rounded-slot border w-full max-w-[357px] h-28 px-4 cursor-pointer text-left transition-all ${
        isFilled ? 'bg-bg-medium border-border/60 shadow-sm shadow-gold/20' : 'bg-card-bg border-border border-dashed'
      } ${
        isDropActive ? 'border-2 border-gold scale-105 shadow-lg' : ''
      } ${isLockedSlot ? 'ring-1 ring-blue-400/50 bg-blue-400/5' : ''}`}
    >
      {/* Role Icon and Label - Secondary */}
      <div className="flex flex-col justify-center items-center gap-1 w-14 flex-shrink-0">
        <RoleIcon role={role} />
        <span className="font-normal text-[10px] leading-tight text-text-gray/60 font-inter">
          {label}
        </span>
      </div>

      {/* Champion - Primary Focus */}
      {selectedChampion ? (
        <div className="flex items-center gap-3 flex-1 min-w-0 animate-in fade-in duration-200">
          <img
            src={selectedChampion.image}
            alt={selectedChampion.name}
            className="w-16 h-16 rounded-lg object-cover border-2 border-gold/30 flex-shrink-0"
          />
          <span className="text-white text-sm font-semibold font-inter truncate">
            {selectedChampion.name}
          </span>
        </div>
      ) : (
        <div className="flex-1 text-center">
          <span className="text-text-gray/40 text-xs font-inter">
            Drop champion
          </span>
        </div>
      )}

      {/* Lock button - only visible on locked slot */}
      {isLockedSlot && (
        <button
          type="button"
          onClick={handleLockClick}
          className="absolute top-1 right-1 p-1 rounded transition-opacity hover:opacity-100"
          style={{
            opacity: 0.6,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.6';
          }}
          title="Unlock slot"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-400"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </button>
      )}

      {/* Per-slot clear button - always visible when filled, positioned based on lock status */}
      {isFilled && (
        <button
          type="button"
          onClick={handleClearClick}
          className={`absolute top-1 p-1.5 rounded-md bg-red-500/80 hover:bg-red-600 transition-colors ${
            isLockedSlot ? 'right-9' : 'right-1'
          }`}
          title="Remove champion from this slot"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </button>
  );
}
