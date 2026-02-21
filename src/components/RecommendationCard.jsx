import React from 'react';

const getDeltaColor = (delta) => {
  const numDelta = parseFloat(delta);
  if (numDelta >= 3) return 'text-green-400 font-semibold';
  if (numDelta >= 1) return 'text-green-300';
  if (numDelta > -1) return 'text-gray-300';
  return 'text-red-400';
};

export default function RecommendationCard({ recommendation, onClick, isDisabled = false }) {
  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick(recommendation);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
      className={`flex flex-col gap-2 p-3 rounded-lg border transition-all ${
        isDisabled
          ? 'bg-card-bg/50 border-border/20 cursor-not-allowed opacity-50'
          : 'bg-card-bg border-border/40 hover:border-blue-400/60 hover:scale-105 cursor-pointer active:scale-95'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-white font-semibold text-sm truncate">
          {recommendation.name}
        </span>
        <span className="text-xs text-blue-300 ml-2">
          {recommendation.winRate.toFixed(1)}%
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {recommendation.tags && recommendation.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-400/10 text-blue-300">
              {tag}
            </span>
          ))}
        </div>
        <span className={`text-xs font-semibold whitespace-nowrap ${getDeltaColor(recommendation.delta)}`}>
          {recommendation.delta}
        </span>
      </div>
    </button>
  );
}
