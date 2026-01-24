export default function ContactPage() {
	return (
		<>
			<h1>Kontakt</h1>
			<div className="flex w-full flex-col-reverse gap-6 md:flex-row md:gap-30">
				<div className="aspect-4/3 w-full min-w-0 overflow-hidden md:aspect-auto md:h-[450px] md:flex-1">
					<iframe
						className="block h-full w-full border-0"
						loading="lazy"
						allowFullScreen
						src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJXyrnqkBbBEcRHx3MIweKRog&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
					/>
				</div>
				<div className="min-w-62.5 flex-1 shrink-0 text-2xl">
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
		</>
	);
}
