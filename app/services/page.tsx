import ServiceCard from "../components/ServiceCard";
import { ServicesData } from "../data";

export default function ServicesPage() {
	return (
		<main style={{ padding: 24 }}>
			<h1>Zakres usług</h1>
			<div className="services-grid">
				{ServicesData.map((t) => (
					<ServiceCard
						key={t.title}
						title={t.title}
						imageUrl={t.imageUrl}
						description={t.description}
					/>
				))}
			</div>
		</main>
	);
}
