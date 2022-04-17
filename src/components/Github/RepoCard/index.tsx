import React from "react";
import { RepoCardProps } from "../index.types";

const RepoCard: React.FC<RepoCardProps> = (props) => {
  const { content } = props;

  return (
    <div className="flex flex-col p-4 border w-60 h-40">
      {/* title */}
      <div className="text-md font-semibold cursor-pointer text-ellipsis" onClick={() => window.open(content.html_url, "_blank")}>
        {content.name}
      </div>
      {/* description */}
      <div className="mt-2 text-sm">{content.description}</div>
      {/* bottom */}
      <div className="flex flex-1 flex-row items-end justify-end text-sm">
        {content.language} | forks: {content.forks}
      </div>
    </div>
  );
};

export default RepoCard;
