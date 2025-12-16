import React from 'react';
import AccordionItem from './Accordion';

const faqData = [
  {
    question: '1. What background do I need to take part in a project? Can I take part as a first year or non-STEM student member?',
    answer: `While there is a broad range of year levels within our member demographics, there is no limit to which year you are in or what discipline you study! 

    Just bring along your passion for making a social impact and working in a team. 

    Of course, each project is technical in its own right, so please feel mentally prepared for that, and reach out if you are stuck during a project.
    `
  },
  {
    question: '2. What kind of projects are offered?',
    answer: `As mentioned above, the scope of our projects can vary from web design, full stack development, GUI implementation, algorithms, to data analysis and visualisation, as well as reporting and research in some cases. 

    You will however have an opportunity to indicate your preferences based on your skills, which is reflected in what you end up working on.
    `
  },
  {
    question: '3. When do projects usually run?',
    answer: `Projects run either in **Semester 1** or **Semester 2**. Usually from **week 3 to about week 11** of semester to allow prompt wrap ups and avoid assignment or exam clashes, with a bit of buffer time at the end.`
  },
  {
    question: '4. What skills do I need to contribute?',
    answer: `You do not have to be an expert in a skillset to meaningfully contribute! 
    
    Any technical skills such as data science or programming in any language is welcome, but your passion to commit to a dedicated project is more important!`
  },
  {
    question: '5. How would PM projects benefit me?',
    answer: `While all our work amongst executive and project members is voluntary and pro-bono, it can be an excellent and unique boost to your CV and technical experience. Consider this as simply a different form of volunteering and demonstrating your leadership abilities in the real non-profits you work with. 
    
    In addition, by being part of a team and taking part in liaising with the client team(s), you become more confident at both technical and non-technical communication, which are a set of crucial skills for your studies and career path ahead!
    `
  },
  {
    question: '6. How is time commitment like if I take part?',
    answer: `From past experiences, project team members generally spend about **3-4 hours a week**. This is similar for project managers, but with a bit more variability between weeks, especially near the end. It is only a guideline and it is up to what you would like to get out of the work.

    If joining as an executive member, **3-5 hours a week** is a fair approximation of commitment, although this varies even more based on what we decide to work on collectively at each moment.
    `
  },
  {
    question: '7. Why the name “Project Magma”?',
    answer: `Firstly, our work is all about projects, so the first part is straightforward.

    Magma on the other hand, symbolises a fluidic flow of passion, and has great potential for transformation via this enthusiasm. With our vision at PM, this is exactly how we would like to connect with non-profits and the broader range of communities in NZ, through an internal energy to make a difference.

    Plus, magma is what rocks are formed from. By joining PM, you join a team dedicated to eventually create concrete and solid technical solutions from this initial passion.
    `
  },
];

const FAQAccordion: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', width: '100%', margin: '2rem auto' }}>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;