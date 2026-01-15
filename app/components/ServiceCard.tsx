'use client';

import { useState } from 'react';

type Props = {
  title: string;
};

export default function ServiceCard({ title }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageUrl = 'https://via.placeholder.com/300x105.png?text=photo';

  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

  return (
    <>
      <div
        className="service-container service-card cursor-pointer box-border overflow-hidden flex flex-col"
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsModalOpen(true);
          }
        }}
      >
        <div className="h-1/2 w-full overflow-hidden">
          <img className="w-full h-full object-cover block" src={imageUrl} alt={title} />
        </div>
        <div className="flex flex-col items-center justify-center px-3 h-1/2">
          <div className="service-card__title">{title}</div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal-backdrop fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="service-container modal overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal__image h-1/3 w-full overflow-hidden">
              <img className="w-full h-full object-cover block" src={imageUrl} alt={title} />
            </div>
            <div className="py-7 px-6 flex-1 flex flex-col overflow-y-auto">
              <h2 className="service-card__title mb-5">{title}</h2>
              <p className="modal__description">{loremIpsum}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
