import React from "react";
import { v4 as uuid } from "uuid";

import ExperienceColumn from "./ExperienceColumn";
import { ExperiencesProps, IExperience } from "./index.types";

const baseExperiences: IExperience[] = [
  {
    id: uuid(),
    title: "software engineer",
    location: "@Natixis | Porto, PT",
    url: "https://www.linkedin.com/company/natixis-in-portugal/",
    description: ".NET developer with UWP/WPF projects.",
    dateFormatted: ["2021 - Present"],
  },
  {
    id: uuid(),
    title: "software engineer",
    location: "@SiDi | Remote, BR",
    url: "https://www.sidi.org.br/",
    description: ".NET developer with UWP/WPF projects.",
    dateFormatted: ["2020 - 2021"],
  },
  {
    id: uuid(),
    title: "sr. software developer",
    location: "@avanade | Recife, BR",
    url: "https://www.avanade.com/",
    description: "Frontend, Sharepoint and Xamarin developer with C# backend and SQLServer database",
    dateFormatted: ["2019 - 2019"],
  },
  {
    id: uuid(),
    title: "software developer",
    location: "@avanade | Recife, BR",
    url: "https://www.avanade.com/",
    description: "Frontend, Sharepoint and Xamarin developer with C# backend and SQLServer database",
    dateFormatted: ["2018 - 2019"],
  },
  {
    id: uuid(),
    title: "software analyst",
    location: "@joanajuliao | Recife, BR",
    url: "https://www.instagram.com/joanajuliaomarca/",
    description: "Frontend and Backend developer with MySQL/Mongo databases, React and Node.",
    dateFormatted: ["2016 - 2018", "2019 - 2020"],
  },
  {
    id: uuid(),
    title: "jr. software developer",
    location: "@allen | Recife, BR",
    url: "http://allen.com.br/",
    description: "Frontend and Sharepoint developer with C# backend and SQLServer database",
    dateFormatted: ["2014 - 2016"],
  },
];

const baseEducation: IExperience[] = [
  {
    id: uuid(),
    title: "bootcamp rocketseat",
    location: "@rocketseat",
    url: "https://rocketseat.com.br/",
    description: "An intensive bootcamp focused in react, react native and nodejs. ",
    dateFormatted: ["2019 - 2019"],
  },
  {
    id: uuid(),
    title: "bsc. computer engineering",
    location: "@ecomp-poli-upe",
    url: "http://upe.poli.br/",
    description: "Bachelor's degree in computer engineering attend in Universidade de Pernambuco",
    dateFormatted: ["2008 - 2014"],
  },
];

const columnStyle = "flex flex-0.5 text-right";

const Experience: React.FC<ExperiencesProps> = (props) => {
  const [experiences, setExperiences] = React.useState<IExperience[]>(baseExperiences);
  const [education, setEducation] = React.useState<IExperience[]>(baseEducation);
  const { isMobile } = props;

  return (
    <div className={`flex flex-row justify-end p-4 mb-4 gap-4 ${isMobile && "flex-col-reverse"}`}>
      <ExperienceColumn title="education" items={education} />
      <ExperienceColumn title="experience" items={experiences} />
    </div>
  );
};

export default Experience;
