import { createFileRoute } from "@tanstack/react-router";
import "./styles/contact.css";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="contact-section">
      <h2 className="contact-h2">Please send us a message at:</h2>
      {/* <a
        href="mailto:projectmagmanz@gmail.com"
        className="contact-email"
      >
        projectmagmanz@gmail.com
      </a> */}
      
      <br></br>

      <center>
      <a href="mailto:projectmagmanz@gmail.com">
          <button className="contact-button">Our official email address</button>
      </a>
      </center>

      <br></br>

      <br></br>

      <br></br>

      <h2 className="contact-h2">Or to sign up for our mailing list:</h2>

      <br></br>

      <center>
      <a href="https://forms.gle/wMDQGo9Ews73hzHK6">
          <button className="contact-button">Join us via this form</button>
      </a>
      </center>
    </section>
  );
}
