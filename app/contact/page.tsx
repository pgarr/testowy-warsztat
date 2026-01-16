export default function ContactPage() {
	return (
		<main className="p-6">
			<h1>Kontakt</h1>
			<div className="flex flex-wrap-reverse gap-30">
				<div>
					<iframe
						width="600"
						height="450"
						className="border-0"
						loading="lazy"
						allowFullScreen
						src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJXyrnqkBbBEcRHx3MIweKRog&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
					/>
				</div>
				<div className="min-w-62.5 flex-1 text-2xl">
					<p>
						<strong>Nr telefonu:</strong> +48 XXX XXX XXX
					</p>
					<p>
						<strong>Adres e-mail:</strong> info@warsztat.pl
					</p>

					<h3 className="mt-10 font-bold">Godziny pracy:</h3>
					<p>Poniedziałek-piątek: 8.00 - 16.00</p>
					<p>Sobota-niedziela: nieczynne</p>

					<h3 className="mt-10 font-bold">Adres:</h3>
					<p>
						ul. Uliczna 12345
						<br />
						12-345 Poznań
					</p>
				</div>
			</div>
		</main>
	);
}
