import { AboutData } from "../data";

export default function AboutPage() {
	return (
		<main className="p-6 text-2xl">
			<h1>O NAS</h1>
			{AboutData.map((paragraph, index) => (
				<p className="mb-4 text-justify" key={index}>
					{paragraph}
				</p>
			))}
		</main>
	);
}
