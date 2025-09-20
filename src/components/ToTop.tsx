import { IoArrowUp } from "react-icons/io5";
import "./styles/footer.css";

export default function ToTop() {
  return (
    <button
      className="to-top-button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      Back to top <IoArrowUp size={21} />
    </button>
  );
}
