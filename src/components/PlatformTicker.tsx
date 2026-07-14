const platforms = [
  "Amazon Kindle",
  "Barnes and Noble",
  "Apple Books",
  "Kobo",
  "Google Play Books",
  "Paperback Edition",
];

export default function PlatformTicker() {
  const doubled = [...platforms, ...platforms];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((p, i) => (
          <span key={i} className="ticker-pill">{p}</span>
        ))}
      </div>
    </div>
  );
}
