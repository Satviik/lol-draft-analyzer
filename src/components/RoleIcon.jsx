import React from 'react';

const roleIcons = {
  Top: (
    <img
    src="/Roleicons/top.png"
    alt="Top"
    className="w-10 h-10 object-contain"
  />
  ),
  Jungle: (
    <img
    src="/Roleicons/jungle.png"
    alt="Jungle"
    className="w-10 h-10 object-contain"
  />
  ),
  Mid: (
    <img
    src="/Roleicons/mid.png"
    alt="Mid"
    className="w-10 h-10 object-contain"
  />
  ),
  ADC: (
    <img
    src="/Roleicons/adc.png"
    alt="ADC"
    className="w-10 h-10 object-contain"
  />
  ),
  Support: (
    <img
    src="/Roleicons/sup.png"
    alt="Support"
    className="w-10 h-10 object-contain"
  />
  ),
};

const filterRoleIcons = {
  Top: (
    <img
    src="/Roleicons/filtertop.png"
    alt="Top"
    className="w-10 h-10 object-contain"
  />
  ),
  Jungle: (
    <img
    src="/Roleicons/filterjungle.png"
    alt="Jungle"
    className="w-10 h-10 object-contain"
  />
  ),
  Mid: (
    <img
    src="/Roleicons/filtermid.png"
    alt="Mid"
    className="w-10 h-10 object-contain"
  />
  ),
  ADC: (
    <img
    src="/Roleicons/filteradc.png"
    alt="ADC"
    className="w-10 h-10 object-contain"
  />
  ),
  Support: (
    <img
    src="/Roleicons/filtersup.png"
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
