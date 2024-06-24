import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Angular" },
  { skill: "CSS" },
  { skill: "Cypress" },
  { skill: "Docker" },
  { skill: "Express" },
  { skill: "Figma" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "MongoDB" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "PostgreSQL" },
  { skill: "Prisma" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "SASS" },
  { skill: "Socket.io" },
  { skill: "Tailwind" },
  { skill: "TypeScript" },
];

const programmingLanguages = skills.filter((item) => {
  return ["JavaScript", "Python", "TypeScript"].includes(item.skill);
});

const libraries = skills.filter((item) => {
  return !["JavaScript", "Python", "TypeScript"].includes(item.skill);
});

const sortedSkills = [
  ...programmingLanguages,
  ...libraries
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello, my name is Tomasz and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-reliant"}</span>, and
              <span className="font-bold">{" determined"}</span> programer from
              Warsaw.
            </p>
            <br />
            <p>
              I graduated from Paweł Włodkowic University College in Płock with
              a bachelor degree in management. Additionally, I completed
              studies at the Warsaw School of Computer Science and Coders Lab -
              IT Academy, obtaining qualifications as a Python Developer and
              React Developer.
            </p>
            <br />
            <p>
              I have various interests and hobbies that keep me constantly
              active. From reading, engaging in sports, to traveling, I am
              always seeking new experiences and love to immerse myself in
              learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
