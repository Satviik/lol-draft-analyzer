import React from 'react';

const roleIcons = {
  Top: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4L8 12v8l12 16 12-16v-8L20 4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Jungle: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M20 10v20M10 20h20" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Mid: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="8" stroke="#C89B3C" strokeWidth="1.5" fill="none"/>
      <path d="M20 12l4 8 4 4-4 4-4-8-4-4 4-4z" fill="#C89B3C" opacity="0.9"/>
    </svg>
  ),
  ADC: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
    </svg>
  ),
  Support: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8L8 14v12l12 8 12-8V14L20 8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
};

export default function RoleIcon({ role, className = '' }) {
  const icon = roleIcons[role] || roleIcons.Top;
  const isMid = role === 'Mid';
  return (
    <span className={`inline-flex items-center justify-center ${isMid ? '' : 'text-white'} ${className}`} style={{ width: 40, height: 40 }}>
      {icon}
    </span>
  );
}
