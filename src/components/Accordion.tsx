import React, { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

// Helper function to parse "answer" text for bold formatting
function parseAnswer(answer: string): React.ReactNode[] {
  const parts = answer.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    } else {
      return <span key={index}>{part}</span>;
    }
  });
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid #ccc",
        padding: "1rem 0",
        boxSizing: "border-box",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "#F6C164",
          color: "#BD7039",
          border: "none",
          borderRadius: "999px",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>{question}</span>
        <span
          style={{
            boxSizing: "border-box",
            backgroundColor: "#FCECCA",
            color: "#BD7039",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            minWidth: "24px",
            minHeight: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          {isOpen ? "–" : "+"}
        </span>
      </button>
      {isOpen && (
        <div
          style={{
            backgroundColor: "#FCECCA",
            border: "1px solid #BD7039",
            padding: "1rem",
            marginTop: "0.5rem",
            borderRadius: "8px",
            color: "#23489E",
            whiteSpace: "pre-line",
          }}
        >
          {parseAnswer(answer)}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
