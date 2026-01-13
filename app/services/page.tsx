import ServiceCard from "../ServiceCard";

const TITLES = [
  "oleje i filtry",
  "zawieszenie i układ hamulcowy",
  "diagnostyka i naprawa",
  "przegląd przed zakupem",
  "dobór i wymiana opon",
];

export default function ServicesPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Zakres usług</h1>
      <div className="services-grid">
        {TITLES.map((t) => (
          <ServiceCard key={t} title={t} />
        ))}
      </div>
    </main>
  );
}
