import React from "react";
import SeparatorDot from "../Base/SeparatorDot";
import Title from "../Base/Title";
import ProjectCard from "./ProjectCard";
import { v4 as uuid } from "uuid";
import { IProjectCard } from "./ProjectCard/index.types";

const baseProjects: IProjectCard[] = [
  {
    id: uuid(),
    title: "Minha Azul Mobile App",
    type: "Team",
    status: "Production",
    description: "Test mobile azul app...",
    url: "https://apps.apple.com/br/app/minha-azul/id1195676806",
    image: "/images/minhaazul.JPG",
  },
  {
    id: uuid(),
    title: "Samsung's Live Message",
    type: "Team",
    status: "Production",
    description: "",
    url: "https://www.microsoft.com/pt-br/p/live-message/9n1llzz0x72b?activetab=pivot:overviewtab",
    image: "/images/livemessage.jpg",
  },
  {
    id: uuid(),
    title: "PRODAM - Facilities",
    type: "Team",
    status: "Production",
    description: "",
    url: "http://portalintegra.am.gov.br/",
    image: "/images/prodam.jpg",
  },
  {
    id: uuid(),
    title: "Personal OS",
    type: "Personal",
    status: "Development",
    description: "",
    url: "https://personal-site-six-kappa.vercel.app/",
    image: "/images/personal.jpg",
  },
];

const Projects: React.FC = () => {
  const [projects, setProjects] = React.useState<any[]>(baseProjects);

  const renderProjects = () => {
    return projects.map((pj) => <ProjectCard key={pj.id} content={pj} />);
  };

  return (
    <div className="flex flex-1 w-full flex-col mb-4">
      <Title title="projects" />
      <SeparatorDot />
      <div className="flex flex-row-reverse flex-wrap gap-4">{renderProjects()}</div>
    </div>
  );
};

export default Projects;
