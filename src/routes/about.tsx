import { createFileRoute } from "@tanstack/react-router";
import TwoColumnRow from "@/components/TwoColStruct";
import FAQAccordion from "@/components/AccordionFAQ";
import "./styles/about.css";

// Generic components
import { useMobile } from "@/context/MobileContext";
import ToTop from "@/components/ToTop";
import blob1 from "@/assets/Blob1.png";
import blob2 from "@/assets/Blob2.png";
import dots1 from "@/assets/Dots1.png";
import dots2 from "@/assets/Dots2.png";
import Blob from "@/components/Blob";


export const Route = createFileRoute("/about")({
  component: RouteComponent,
});


function RouteComponent() {
  const isMobile = useMobile();

  return <>
  
      <Blob
        src={blob1}
        top="35rem"
        right="-2rem"
        width="280px"
        height="280px"
        rotation={180}
        scale={2}
      />
      <Blob
        src={blob2}
        top="70rem"
        left="2rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2.2}
      />
      <Blob
        src={dots2}
        top="90rem"
        left="-1rem"
        width="220px"
        height="220px"
        rotation={70}
        scale={2}
      />
      <Blob
        src={dots1}
        top="120rem"
        right="1rem"
        width="220px"
        height="220px"
        rotation={180}
        scale={2}
      />
  
  <section className="about-title"> 
    <h1 className="header-container">About Project Magma</h1>
    </section>
    <section className="who-we-are"> 

    <h2 className={isMobile ? "about-title-mobile" : "about-title"}>
       Who We Are
    </h2>

    <TwoColumnRow        
    left={<p className="about-regular-TwoCols-text">Project Magma is a student organisation and initiative started at the University of Auckland to connect interested STEM+ students with non-profit organisations across Auckland and beyond, to facilitate semester-long project development that solves technical problems faced by these organisations. </p>}
    right={<center><img src="/src/assets/about-1.jpg" alt="About Us - Launch Workshop" style={{ width: '75%' }} /></center>}
    />

    <br></br>

    </section>

    <section className="what-we-do">
     
    <h2 className={isMobile ? "about-title-mobile" : "about-title"}>
       What We Do
    </h2>

    <p className="about-regular-text">Our projects typically start with improving and automating the clients’ existing operations. On the technical side this is usually related to data analysis and visualisation, some GUI and web tool development, natural language processing, email and database automation, and general research suited for the scope of each semester-long project. The typical technical outcomes at the end usually lead to social impact at larger scales long-term.</p>

    <p className="about-regular-text">Within the programme, each team usually has a team lead (Project Manager, PM) and/or secretary to help the whole team keep track of progress, and provide a support system. Project Magma executives also support teams on the side throughout the project cycle.</p>

    <p className="about-regular-text">What’s most important about our projects is that, <b>no matter what background you come from,</b> as long as you have a keen interest in taking part in nonprofit community work and/or gaining technical experience, there will be something in store for you!</p>

    <br></br>
  
    <center>
    <a href="/projects">
        <button className="about-project-button">Check out some of our projects →</button>
    </a>
    </center>

    <br></br>
    
    </section>
    <section className="our-clients"> 

    <h2 className={isMobile ? "about-title-mobile" : "about-title"}>
       Our Non-Profit Clients
    </h2>

    <TwoColumnRow        
    left={<center><img src="/src/assets/about-2.jpg" alt="About Us - Showcase Workshop" style={{ width: '75%' }} /></center>}
    right={<p className="about-regular-TwoCols-text">The types of work many of our clients do span youth counselling and mentoring, education, and many areas of healthcare. By working on each project, members also open up opportunities to network with volunteers, managers, and professionals in these not-for-profit spaces.</p>}
    />
    
    </section>

    <br></br>

    <section className="faqs"> 

    <h2 className={isMobile ? "about-title-mobile" : "about-title"}>
      Frequently Asked Questions (FAQs)
    </h2>

    <FAQAccordion />

    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingBottom: "40px",
      }}
    >
      <ToTop />
    </div>

    </section>
    </>
}
