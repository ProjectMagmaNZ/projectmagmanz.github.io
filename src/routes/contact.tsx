import { createFileRoute } from "@tanstack/react-router";
import "./styles/contact.css";

import blob1 from "@/assets/Blob1.png";
import blob2 from "@/assets/Blob2.png";
import Blob from "@/components/Blob";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Blob
        src={blob2}
        top="15rem"
        left="-2rem"
        width="280px"
        height="280px"
        rotation={180}
        scale={2}
      />
      <Blob
        src={blob1}
        top="35rem"
        right="1rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2.2}
      />
      
    <section className="contact-section">
      <h3 className="contact-h3">
        Thank you for your interest in our mission! Our programme runs twice in a year, once in <u>Semester 1</u> and once in <u>Semester 2</u>.
      </h3>

      <br></br>

      <h3 className="contact-h3">
        Sign ups usually officially open at the <i>very start of each semester</i>. But please use the below form to express your interest, and we will contact you when the next sign ups open:
      </h3>

      {/* <h2 className="contact-h2">Or to sign up for our mailing list:</h2> */}

      <br></br>

      <center>
      <a href="https://forms.gle/wMDQGo9Ews73hzHK6">
          <button className="contact-button">Join us via this form</button>
      </a>
      </center>

      <br></br>

      <br></br>

      <br></br>

      <h3 className="contact-h3">For any other queries, please send us a message at:</h3>
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

    </section>
    </>
  );
}
