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
        className="service-card"
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsModalOpen(true);
          }
        }}
      >
        <div className="service-card__photo">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="service-card__content">
          <div className="service-card__title">{title}</div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal__image">
              <img src={imageUrl} alt={title} />
            </div>
            <div className="modal__content">
              <h2 className="modal__title">{title}</h2>
              <p className="modal__description">{loremIpsum}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
