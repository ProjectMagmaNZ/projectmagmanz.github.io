import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ContactTextArea from "@/components/ContactTextArea";
import "./styles/contact.css";

import blob1 from "@/assets/Blob1.png";
import blob2 from "@/assets/Blob2.png";
import dots1 from "@/assets/Dots1.png";
import dots2 from "@/assets/Dots2.png";
import Blob from "@/components/Blob";


export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});
const FORM_URL = "https://script.google.com/macros/s/AKfycbwFTjBElr5p8JsjqcG3WWVRf5tL0Er-sJ85i2kSW2FLNV-yrbS2JXWXnCuvnFALaINhww/exec"; 


function RouteComponent() {
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!fromEmail || !subject || !body) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);
    console.log(fromEmail);
    console.log(subject);
    console.log(body);
    try {
      const form = new URLSearchParams();
      form.append("email", fromEmail);
      form.append("subject", subject);
      form.append("message", body);

      const res = await fetch(FORM_URL, {
        method: "POST",
        body: form,
      });

      const json = await res.json();
      if (json.status !== "ok") throw new Error(json.message || "Send failed");

      console.log("Message sent.");
      setFromEmail("");
      setSubject("");
      setBody("");
    } catch (err) {
      console.error(err);
      alert("Send failed. See console for details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <Blob
        src={blob2}
        top="35rem"
        right="-2rem"
        width="280px"
        height="280px"
        rotation={180}
        scale={2}
      />
      <Blob
        src={blob1}
        top="70rem"
        left="2rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2.2}
      />
      <Blob
        src={dots2}
        top="70rem"
        right="-1rem"
        width="220px"
        height="220px"
        rotation={70}
        scale={2}
      />
      <Blob
        src={dots1}
        top="40rem"
        left="3rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2}
      />
    
    <div className="contact-form-container">
      <section id="contact-form">
        <div className="contact">Contact</div>
        <div className="us">Us</div>
        <div className="subtext"><br />Feel free to reach out as a member or a <br />client, or if you want more information.</div>
        <ContactTextArea className="email" title="Your email" placeholder="" onChange={setFromEmail} value={fromEmail}/>
        <ContactTextArea className="subject" title="Subject" placeholder="" onChange={setSubject} value={subject}/>
        <ContactTextArea className="message" title="Message" placeholder="" onChange={setBody} value={body}/>
      </section>
      <div style={{ marginTop: 8 }}>
        <button className="send-button" onClick={handleSend} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>

        
      </div>
      <div className="join-us-wrapper"><p>Join as a member for free to access workshops, projects, and more!</p></div>
    </div>
    </>
  );
}