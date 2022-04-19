import React from "react";
import { useRepositories } from "../../hooks/github";
import RepoCard from "./RepoCard";

const Github: React.FC = () => {
  const { status, data, error, isFetching } = useRepositories();

  const renderCards = () => {
    if (isFetching) return <div>loading...</div>;
    if (status !== "success") return <div>error..</div>;

    return data.map((repo) => {
      return <RepoCard key={repo.id} content={repo} />;
    });
  };

  return (
    <div className="flex flex-1 flex-col justify-end mb-4 text-right">
      {/* title */}
      <div className="flex flex-1 flex-row justify-end text-right">
        <div className="text-lg font-bold text-right cursor-pointer" onClick={() => window.open("https://github.com/brunocharamba/", "_blank")}>
          github
        </div>
      </div>
      {/* separator */}
      <div className="mb-2 text-right">.</div>
      {/* cards */}
      <div className="flex flex-21 justify-end gap-4 flex-wrap">{renderCards()}</div>
    </div>
  );
};

export default Github;
