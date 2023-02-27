import React from 'react';

export const StopIcon = ({ fill }: { fill?: string }) => {
  return (
    <svg
      width="115"
      height="115"
      viewBox="0 0 115 115"
      stroke={fill || '#C4C4C4'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 20L95 94" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
