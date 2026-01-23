import { AboutData } from "../data";

export default function AboutPage() {
	return (
		<>
			<h1>O NAS</h1>
			{AboutData.map((paragraph, index) => (
				<p className="mb-4 text-justify text-2xl" key={index}>
					{paragraph}
				</p>
			))}
		</>
	);
}
