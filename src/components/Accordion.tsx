import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          textAlign: 'left',
          width: '100%',
          cursor: 'pointer',
          color: '#BD7039'
        }}
      >
        {question}
      </button>
      {isOpen && (
        <div style={{ marginTop: '0.5rem', color: '#23489E' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;