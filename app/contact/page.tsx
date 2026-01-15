export default function KontaktPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Kontakt</h1>
      <iframe 
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        loading="lazy" 
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJXyrnqkBbBEcRHx3MIweKRog&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
      />
    </main>
  );
}
