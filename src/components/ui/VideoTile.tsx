import React, { useRef, useState } from 'react';
import { PlayIcon, PauseIcon } from 'lucide-react';
import { UgcClip } from '../../data/content';

interface VideoTileProps {
  clip: UgcClip;
  className?: string;
  showMetric?: boolean;
}

export function VideoTile({ clip, className = '', showMetric = true }: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <figure
      className={`group relative aspect-[9/16] overflow-hidden rounded-2xl border border-hairline bg-ink ${className}`}>
      
      <video
        ref={videoRef}
        src={clip.src}
        poster={clip.poster}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover" />
      

      <button
        type="button"
        onClick={toggle}
        aria-label={`${playing ? 'Pausar' : 'Reproducir'} el vídeo de ${clip.creator}`}
        className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white">
        
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink transition-[opacity,transform] duration-150 ease-out ${
          playing ?
          'opacity-0 group-hover:opacity-100' :
          'opacity-100 group-hover:scale-105'}`
          }>
          
          {playing ?
          <PauseIcon className="h-4 w-4" aria-hidden="true" /> :

          <PlayIcon className="ml-0.5 h-4 w-4" aria-hidden="true" />
          }
        </span>
      </button>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/75 px-2.5 py-1 text-[10.5px] font-semibold text-white">
        {clip.platform}
      </span>

      {showMetric &&
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-accent-bright px-2.5 py-1 text-[10.5px] font-bold text-ink">
          {clip.metric} {clip.metricLabel}
        </span>
      }

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-ink/75 px-3 py-2.5">
        <span className="block text-[12.5px] font-semibold text-white">
          {clip.creator}
        </span>
        <span className="block text-[11px] text-white/65">{clip.niche}</span>
      </figcaption>
    </figure>);

}