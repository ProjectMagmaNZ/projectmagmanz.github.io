import { createFileRoute } from "@tanstack/react-router";
import TwoColumnRow from "@/components/TwoColStruct";
import FAQAccordion from "@/components/AccordionFAQ";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <><section className="about-title"> 
    <h1>About Project Magma</h1>
    </section>
    <section className="who-we-are"> 
    <h2>Who we are</h2>

    <TwoColumnRow        
    left={<p>Project Magma is a student organisation and initiative started at the University of Auckland to connect interested STEM+ students with non-profit organisations across Auckland and beyond, to facilitate semester-long project development that solves technical problems faced by these organisations. </p>}
    right={<center><img src="/src/assets/about-1.jpg" alt="About Us - Launch Workshop" style={{ width: '75%' }} /></center>}
    />

    </section>

    <section className="what-we-do"> 
    <h2>What we do</h2>

    <p>Our projects typically start with improving and automating the clients’ existing operations. On the technical side this is usually related to data analysis and visualisation, some GUI and web tool development, natural language processing, email and database automation, and general research suited for the scope of each semester-long project. The typical technical outcomes at the end usually lead to social impact at larger scales long-term.</p>

    <p>Within the programme, each team usually has a team lead (Project Manager, PM) and/or secretary to help the whole team keep track of progress, and provide a support system. Project Magma executives also support teams on the side throughout the project cycle.</p>

    <p>What’s most important about our projects is that, no matter what background you come from, as long as you have a keen interest in taking part in nonprofit community work and/or gaining technical experience, there will be something in store for you!</p>
  
    <a href="/projects">
        <button className="about-project-button">Check out some of our projects...</button>
    </a>

    </section>
    <section className="our-clients"> 
    <h2>Our clients</h2>

    <TwoColumnRow        
    left={<center><img src="/src/assets/about-2.jpg" alt="About Us - Showcase Workshop" style={{ width: '75%' }} /></center>}
    right={<p>The types of work many of our clients do span youth counselling and mentoring, education, and many areas of healthcare. By working on each project, members also open up opportunities to network with volunteers, managers, and professionals in these nonprofit spaces.</p>}
    />
    
    </section>
    <section className="faqs"> 
    <h2>Frequently Asked Questions (FAQs)</h2>

    <FAQAccordion />

    </section>
    </>
}
