"use client";

import { useState } from "react";

type Props = {
	title: string;
	imageUrl: string;
	description: string;
};

export default function ServiceCard({ title, imageUrl, description }: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div
				className="service-container service-card box-border flex cursor-pointer flex-col overflow-hidden rounded-xl"
				onClick={() => setIsModalOpen(true)}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						setIsModalOpen(true);
					}
				}}
			>
				<div className="h-1/2 w-full overflow-hidden">
					<img
						className="block h-full w-full object-cover transition-transform duration-300 hover:scale-105"
						src={imageUrl}
						alt={title}
					/>
				</div>
				<div className="flex h-1/2 flex-col items-center justify-center px-3">
					<div className="service-card__title">{title}</div>
				</div>
			</div>

			{isModalOpen && (
				<div
					className="modal-backdrop fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center"
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className="modal flex flex-col overflow-hidden rounded-xl"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="h-1/2 w-full overflow-hidden">
							<img className="block h-full w-full object-cover" src={imageUrl} alt={title} />
						</div>
						<div className="flex flex-1 flex-col overflow-y-auto px-9 py-6">
							<h2 className="service-card__title mb-5">{title}</h2>
							<p className="modal__description">{description}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
