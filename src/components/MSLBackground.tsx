
import React from 'react';

type MSLBackgroundProps = {
  opacity?: number; // 0..1, controls visibility intensity
  shadow?: number; // 0..1, controls glow intensity
  className?: string;
};

const MSLBackground: React.FC<MSLBackgroundProps> = ({ opacity, shadow, className }) => {
  const style: React.CSSProperties = {};
  if (opacity !== undefined) {
    (style as any)['--msl-opacity'] = opacity;
  }
  if (shadow !== undefined) {
    (style as any)['--msl-shadow'] = shadow;
  }

  return (
    <div className={`msl-text-bg ${className ?? ''}`} style={style}>
      <div className="msl-text">MSL</div>
      <div className="msl-text">MSL</div>
      <div className="msl-text">MSL</div>
      <div className="msl-text">MSL</div>
      <div className="msl-text">MSL</div>
      <div className="msl-text">MSL</div>
      <div className="msl-text">MSL</div>
      <div className="msl-text">MSL</div>
      <div className="msl-text">MSL</div>
      <div className="msl-text">MSL</div>
    </div>
  );
};

export default MSLBackground;
