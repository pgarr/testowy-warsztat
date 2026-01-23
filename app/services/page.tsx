import ServiceCard from "../components/ServiceCard";
import { ServicesData } from "../data";

export default function ServicesPage() {
	return (
		<>
			<h1>Usługi</h1>
			<div className="services-grid flex flex-wrap justify-center gap-8">
				{ServicesData.map((t) => (
					<ServiceCard
						key={t.title}
						title={t.title}
						imageUrl={t.imageUrl}
						description={t.description}
					/>
				))}
			</div>
		</>
	);
}
