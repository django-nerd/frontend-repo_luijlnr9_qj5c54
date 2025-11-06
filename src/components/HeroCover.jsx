import Spline from '@splinetool/react-spline';

export default function HeroCover({ onCTAClick }) {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gentle gradient to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Fotografia Eventi Privati
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Ritratti autentici, momenti irripetibili, stile minimale. Un portfolio essenziale ispirato al design Apple.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={onCTAClick}
              className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm sm:text-base font-medium shadow-sm hover:bg-gray-800 transition-colors"
            >
              Crea il tuo portfolio
            </button>
            <a
              href="#anteprima"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white text-gray-900 px-6 py-3 text-sm sm:text-base font-medium hover:border-gray-400 transition-colors"
            >
              Vedi anteprima
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
