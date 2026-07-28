"use client";

import { ReactLenis } from 'lenis/react';

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.6,
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.04,
        touchInertiaExponent: 1.2,
        touchMultiplier: 0.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
