import React from "react";
import { ProjectCardProps } from "./index.types";

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { content } = props;

  console.log(content);

  return (
    <div className="flex flex-row-reverse relative border h-60 min-w-[25%] max-w-[100%] overflow-hidden bg-gradient-to-b from-gray-400 to-zinc-600 text-right">
      {/* background */}
      <img className="absolute bg-cover w-full opacity-10" src={content.image} />
      {/* content */}
      <div className="flex flex-1 flex-col justify-end p-4">
        {/* tags */}
        <div className="flex flex-row-reverse text-md text-gray-200">
          <div className="flex flex-col lowercase">
            <div className="mt-2 text-sm select-none">{content.type}</div>
            <div className="border w-full" />
          </div>
        </div>
        {/* title */}
        <a className="text-lg cursor-pointer text-ellipsis z-10 text-gray-200" href={content.url} target="_blank" rel="noreferrer">
          {content.title}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
