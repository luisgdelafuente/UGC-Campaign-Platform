import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-[19px] font-extrabold tracking-[-0.04em] text-ink"
      aria-label="Locals Club — inicio">
      
      <span
        className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-ink text-[12px] font-extrabold text-white"
        aria-hidden="true">
        
        L
      </span>
      locals
    </Link>);

}