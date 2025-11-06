import { useEffect, useRef } from 'react';

// Subtle background animation based on cursor
export default function MouseParallax() {
  const blobRef = useRef(null);

  useEffect(() => {
    const el = blobRef.current;
    if (!el) return;

    let raf;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 40; // max 40px offset
      targetY = (e.clientY / innerHeight - 0.5) * 40;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        ref={blobRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vmax] w-[60vmax] rounded-full bg-gradient-to-br from-gray-100 via-white to-gray-200 opacity-60 blur-3xl"
        style={{ transition: 'transform 0.2s linear' }}
      />
    </div>
  );
}
