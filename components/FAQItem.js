import { FaPlus } from 'react-icons/fa';

export default function FAQItem({ question, answer, isActive, onClick }) {
  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <div className="faq-question" onClick={onClick}>
        <h3>{question}</h3>
        <div className="faq-toggle">
          <FaPlus />
        </div>
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}
