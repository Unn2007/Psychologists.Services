// PsychologistCard.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Details from './Details';

const PsychologistCard = ({ psychologist }) => {
  const { psychologistId } = useParams();

  // Якщо id картки співпадає з параметром з URL, показуємо деталі
  const isActive = psychologistId === psychologist.id;

  return (
    <div className="psychologist-card">
      <h2>{psychologist.name}</h2>
      <p>{psychologist.description}</p>
      <Link to={`/psychologists/${psychologist.id}/details`}>Read more</Link>
      {isActive && <Details />}
    </div>
  );
};

export default PsychologistCard;
