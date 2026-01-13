import React from "react";

type Props = {
  title: string;
};

export default function ServiceCard({ title }: Props) {
  return (
    <div className="service-card">
      <div className="service-card__photo">
        <img
          src="https://via.placeholder.com/300x105.png?text=photo"
          alt={title}
        />
      </div>
      <div className="service-card__content">
        <div className="service-card__title">{title}</div>
      </div>
    </div>
  );
}
