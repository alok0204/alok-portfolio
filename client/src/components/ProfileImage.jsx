import React, { useState } from 'react';
import { User } from 'lucide-react';

export default function ProfileImage({ className = '', size = 'lg' }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative group ${className}`}>
      {/* Decorative Outer Glow */}
      <div 
        className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 opacity-60 blur-xl group-hover:opacity-90 transition duration-700 group-hover:duration-300 animate-pulse-slow" 
        aria-hidden="true" 
      />

      {/* Modern Gradient Border Container */}
      <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-2xl overflow-hidden">
        
        {/* Aspect-ratio preserving inner frame */}
        <div className="relative rounded-[13px] overflow-hidden bg-navy-900 flex items-center justify-center">
          
          {/* Skeleton Shimmer while loading */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
          )}

          {/* Real Photo Component */}
          {!imageError ? (
            <picture className="w-full h-full block">
              <source srcSet="/images/profile.webp" type="image/webp" />
              <img
                src="/images/profile.jpg"
                alt="Alok Kumar Vishwas - Computer Science Engineering Student at GL Bajaj"
                className={`w-full h-auto object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                loading="eager"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
              />
            </picture>
          ) : (
            /* Fallback avatar if local image cannot be found */
            <div className="w-64 h-64 flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center mb-3 text-cyan-400">
                <User className="w-8 h-8" />
              </div>
              <span className="text-sm font-semibold text-slate-200">Alok Kumar Vishwas</span>
              <span className="text-xs text-slate-400 mt-1">CS Engineering Student</span>
            </div>
          )}

          {/* Subtle Glass Tint Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Status Pill */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-lg flex items-center gap-1.5 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block -ml-3.5" />
        <span>Open to Opportunities</span>
      </div>
    </div>
  );
}
