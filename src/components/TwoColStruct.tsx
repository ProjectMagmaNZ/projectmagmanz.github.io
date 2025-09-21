import React from 'react';
import '/src/routes/styles/TwoColStruct.css';

interface TwoColumnRowProps {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean; // Optional: to switch columns
}

const TwoColumnRow: React.FC<TwoColumnRowProps> = ({ left, right, reverse = false }) => {
  return (
    <div className={`two-column-row ${reverse ? 'reverse' : ''}`}>
      <div className="column">{left}</div>
      <div className="column">{right}</div>
    </div>
  );
};

export default TwoColumnRow;