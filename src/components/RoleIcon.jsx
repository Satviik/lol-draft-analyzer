import React from 'react';

const roleIcons = {
  Top: (
    <img
    src="/public/Roleicons/top.png"
    alt="Top"
    className="w-10 h-10 object-contain"
  />
  ),
  Jungle: (
    <img
    src="/public/Roleicons/jungle.png"
    alt="Jungle"
    className="w-10 h-10 object-contain"
  />
  ),
  Mid: (
    <img
    src="/public/Roleicons/mid.png"
    alt="Mid"
    className="w-10 h-10 object-contain"
  />
  ),
  ADC: (
    <img
    src="/public/Roleicons/adc.png"
    alt="ADC"
    className="w-10 h-10 object-contain"
  />
  ),
  Support: (
    <img
    src="/public/Roleicons/sup.png"
    alt="Support"
    className="w-10 h-10 object-contain"
  />
  ),
};

const filterRoleIcons = {
  Top: (
    <img
    src="/public/Roleicons/filtertop.png"
    alt="Top"
    className="w-10 h-10 object-contain"
  />
  ),
  Jungle: (
    <img
    src="/public/Roleicons/filterjungle.png"
    alt="Jungle"
    className="w-10 h-10 object-contain"
  />
  ),
  Mid: (
    <img
    src="/public/Roleicons/filtermid.png"
    alt="Mid"
    className="w-10 h-10 object-contain"
  />
  ),
  ADC: (
    <img
    src="/public/Roleicons/filteradc.png"
    alt="ADC"
    className="w-10 h-10 object-contain"
  />
  ),
  Support: (
    <img
    src="/public/Roleicons/filtersup.png"
    alt="Support"
    className="w-10 h-10 object-contain"
  />
  ),
};

export default function RoleIcon({ role, className = '', isFilter = false }) {
  const icons = isFilter ? filterRoleIcons : roleIcons;
  const icon = icons[role] || icons.Top;
  const isMid = role === 'Mid';
  return (
    <span className={`inline-flex items-center justify-center ${isMid ? '' : 'text-white'} ${className}`} style={{ width: 40, height: 40 }}>
      {icon}
    </span>
  );
}
