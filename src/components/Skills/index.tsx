import React from "react";
import { SkillsProps } from "./index.types";
import SkillCard from "./SkillCard";

const baseFrontend: string[] = ["sharepoint", "javascript", "react", "react native", "html/css"];
const baseBackend: string[] = ["c#", "nodejs", "sql server", "mysql", "mongodb"];

const Skills: React.FC<SkillsProps> = () => {
  const [frontend, setFrontend] = React.useState<string[]>(baseFrontend);
  const [backend, setBackend] = React.useState<string[]>(baseBackend);

  return (
    <div className="flex flex-1 flex-col justify-end mb-4 text-right">
      {/* title */}
      <div className="flex flex-1 flex-row justify-end text-right">
        <div className="text-lg font-bold text-right">skills</div>
      </div>
      {/* separator */}
      <div className="mb-2 text-right">.</div>
      {/* cards */}
      <div>
        <SkillCard items={frontend} />
        <SkillCard items={backend} />
      </div>
    </div>
  );
};

export default Skills;
