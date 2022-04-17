import React from "react";
import { ExperiencesColumnProps } from "../index.types";

const ExperienceColumn: React.FC<ExperiencesColumnProps> = (props) => {
  const { title, items } = props;

  const renderItems = () => {
    if (!items) return <></>;

    return items.map((item) => {
      return (
        <div key={item.id} className="flex flex-col justify-end items-end mb-2">
          {/* title */}
          <div className="text-lg font-semibold">{item.title}</div>
          {/* location */}
          <div className="text-sm italic cursor-pointer" onClick={() => window.open(item.url, "_blank")}>
            {item.location}
          </div>
          {/* description */}
          <div className="text-md py-2 w-3/5">{item.description}</div>
          {/* date */}
          <div className="flex flex-col text-sm font-semibold italic">
            {item.dateFormatted.map((date, ind) => {
              return (
                <div key={ind}>
                  {" "}
                  {/*the index here does not matter*/}
                  <span>{date}</span>
                  <div className="top-14 border border-zinc-600" />
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-1 justify-end mt-4">
      <div className="flex flex-col text-right">
        {/* title */}
        <div className="text-lg font-bold">{title}</div>
        {/* separator */}
        <div className="mb-2 text-right">.</div>
        <div>{renderItems()}</div>
      </div>
    </div>
  );
};

export default ExperienceColumn;
