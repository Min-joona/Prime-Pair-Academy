export function Spinner() {
  return (
    <div className="grid place-items-center py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-ink/10 border-t-ghefi" />
    </div>
  );
}

export function PageHeader({ emoji, title, subtitle, accent = 'text-ghefi' }) {
  return (
    <div className="mb-6">
      <h1 className="font-display text-3xl font-extrabold md:text-4xl">
        <span className="mr-2">{emoji}</span>
        <span className={accent}>{title}</span>
      </h1>
      {subtitle && <p className="mt-1 text-ink/60">{subtitle}</p>}
    </div>
  );
}

export function Pills({ items, value, onChange }) {
  return (
    <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto">
      {items.map((it) => (
        <button
          key={it}
          onClick={() => onChange(it)}
          className={`pill whitespace-nowrap border-2 px-4 py-2 ${
            value === it ? 'border-ghefi bg-ghefi text-white' : 'border-ink/10 text-ink/60 hover:border-ink/30'
          }`}
        >
          {it}
        </button>
      ))}
    </div>
  );
}
