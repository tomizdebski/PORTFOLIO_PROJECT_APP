import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [

{
    name: "Kanban App",
    description:
      "The Kanban App is a project management application designed to streamline task organization and workflow efficiency. It utilizes a Kanban board layout, allowing users to visualize and manage tasks through drag-and-drop functionality. Stack: Nextjs, React, Typescript, Tailwindcss, Nodejs, React-dnd-kit ",
    image: "/Kanban.png",
    github: "https://github.com/tomizdebski/KANBAN_APP",
    link: "https://kanban-4h6n8knei-tomizdebskis-projects.vercel.app/",
  },
  {
    name: "Shortly App",
    description:
      "The Shortly App is an application designed to compress long URLs, thereby creating shorter, more shareable, and memorable versions.  Stack: Nextjs, React, Typescript, Tailwindcss, MongoDB, Nodejs, Auth ",
    image: "/shortly_app.png",
    github: "https://github.com/tomizdebski/shortly_v1.git",
    link: "https://www.shortly.com.pl/",
  },
  {
    name: "Barter Skill App",
    description:
      "This is an application for exchanging skills between registered users. It also includes a quiz where you can test your knowledge. tack: Nextjs, React, Tailwindcss, Nodejs, Express, Prisma, Postgres, Auth",
    image: "/barter_app.png",
    github: "https://github.com/tomizdebski/NEXT_PORTFOLIO_CLIENT",
    link: "https://www.barter-skill.pl/",
  },
  {
    name: "Wyrzuta.pl App",
    description:
      "The app enables the donation of unnecessary items. You can create an account, post an advertisement, check the location, and finalize the transaction. Stack: React, Tailwindcss, Nodejs, Express",
    image: "/wyrzuta_app.png",
    github: "https://github.com/tomizdebski/wyrzuta_pl_frontend",
    link: "https://wyrzuta.pl/",
  },
  {
    name: "BulettinBoard App",
    description:
      "THEBULETINBOARD.pl for free ads in the following categories: Electronics, Automotive, Real Estate, Work. Offers can be found quickly, and it is easy to submit an advertisement. Stack: Python, Django",
    image: "/bulletinBoardApp.png",
    github: "https://github.com/tomizdebski/bulletin_board/",
    link: "https://github.com/tomizdebski/bulletin_board/",
  },
  {
    name: "Chat App",
    description:
      "Application is used for chatting, based on socket.io. Stack: Nextjs, React, Typescript, Tailwindcss, Nodejs, Socket.io, Express",
    image: "/chat_app.png",
    github: "https://github.com/tomizdebski/Chat_app_next",
    link: "https://www.chat-online.pl/",
  },
  {
    name: "TomChat App",
    description:
      "Application is used for chatting, based on socket.io. Stack: Nextjs, React, Typescript, Tailwindcss, Prisma, Nodejs, Auth, Socket.io, Postgres ",
    image: "/chat_v2.png",
    github: "https://github.com/tomizdebski/Chat_client_next_prisma_v2.git",
    link: "https://chat-client-next-prisma-v2.vercel.app/",
  },




]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2 mt-8">
                    <Link href={project.link} >
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="hover:opacity-70 "
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
