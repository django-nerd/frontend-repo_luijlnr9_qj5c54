import { useState } from 'react';

export default function PortfolioForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    bio: '',
    skills: '',
    projects: '',
    links: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: form.name.trim(),
      bio: form.bio.trim(),
      skills: form.skills.split(',').map((s) => s.trim()).filter(Boolean),
      projects: form.projects.split('\n').map((p) => p.trim()).filter(Boolean),
      links: form.links.split('\n').map((l) => l.trim()).filter(Boolean),
    };
    onSubmit(payload);
  };

  return (
    <section id="modulo" className="relative py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Costruisci il tuo profilo</h2>
        <p className="mt-2 text-gray-600">Compila i campi: tutto si aggiorna sulla pagina, senza backend.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
              placeholder="Es. Martina Rossi"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Biografia</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
              placeholder="Chi sei, cosa fotografi, il tuo approccio minimalista..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Competenze (separate da virgola)</label>
            <input
              name="skills"
              value={form.skills}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
              placeholder="Ritratto, Reportage, Post-produzione"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Progetti (uno per riga)</label>
            <textarea
              name="projects"
              value={form.projects}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
              placeholder={"Matrimonio Laura & Luca\nEvento Privato Milano\nRitratto Editoriale"}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Link (uno per riga)</label>
            <textarea
              name="links"
              value={form.links}
              onChange={handleChange}
              rows={3}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition"
              placeholder={"https://instagram.com/tuo_profilo\nhttps://behance.net/portfolio"}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <a href="#anteprima" className="text-sm text-gray-600 hover:text-gray-900 transition">Vai all'anteprima</a>
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 font-medium shadow-sm hover:bg-gray-800 transition-colors"
            >
              Genera Portfolio
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
