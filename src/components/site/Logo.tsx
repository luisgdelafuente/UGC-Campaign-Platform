import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-[17px] font-bold tracking-[-0.02em] text-ink">
      
      <span
        className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-accent text-[12px] font-extrabold text-white"
        aria-hidden="true">
        
        U
      </span>
      UGCFlow
    </Link>);

}