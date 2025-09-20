import { createFileRoute } from "@tanstack/react-router";
import "./styles/contact.css";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="contact-section">
      <h2 className="contact-h2">Please send us a message at:</h2>
      <a
        href="mailto:projectmagmanz@gmail.com"
        className="contact-email"
      >
        projectmagmanz@gmail.com
      </a>
    </section>
  );
}
