export default function PreviewPanel({ data }) {
  const { name, bio, skills = [], projects = [], links = [] } = data || {};

  return (
    <section id="anteprima" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{name || 'Il tuo nome'}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{bio || 'Scrivi una breve biografia: stile, ispirazioni, ciò che ti rende unico.'}</p>
            </div>
          </div>

          {skills.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Competenze</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <span key={i} className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 hover:border-gray-300 transition">{s}</span>
                ))}
              </div>
            </div>
          )}

          {projects.length > 0 && (
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Progetti</h4>
              <ul className="mt-3 space-y-2">
                {projects.map((p, i) => (
                  <li key={i} className="group flex items-center justify-between rounded-xl border border-gray-200 p-4 hover:bg-gray-50 transition">
                    <span className="text-gray-900">{p}</span>
                    <span className="text-gray-400 group-hover:text-gray-500 transition">→</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {links.length > 0 && (
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Link</h4>
              <ul className="mt-3 space-y-2">
                {links.map((l, i) => (
                  <li key={i}>
                    <a href={l} target="_blank" rel="noreferrer" className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-800 transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
