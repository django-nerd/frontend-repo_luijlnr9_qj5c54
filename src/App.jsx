import { useRef, useState } from 'react';
import HeroCover from './components/HeroCover';
import PortfolioForm from './components/PortfolioForm';
import PreviewPanel from './components/PreviewPanel';
import MouseParallax from './components/MouseParallax';

function App() {
  const previewRef = useRef(null);
  const [data, setData] = useState({
    name: '',
    bio: '',
    skills: [],
    projects: [],
    links: [],
  });

  const handleGenerate = (payload) => {
    setData(payload);
    // Smooth scroll to preview
    const section = document.querySelector('#anteprima');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 antialiased">
      <MouseParallax />

      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">Portfolio Foto</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#modulo" className="hover:text-gray-900 transition">Modulo</a>
            <a href="#anteprima" className="hover:text-gray-900 transition">Anteprima</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroCover onCTAClick={() => document.getElementById('modulo')?.scrollIntoView({ behavior: 'smooth' })} />
        <PortfolioForm onSubmit={handleGenerate} />
        <PreviewPanel ref={previewRef} data={data} />
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        <div className="max-w-3xl mx-auto px-6">
          © {new Date().getFullYear()} Portfolio Eventi Privati — design minimale.
        </div>
      </footer>
    </div>
  );
}

export default App;
