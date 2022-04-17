import React from "react";
import { SkillCardProps } from "../index.types";

// import { Container } from './styles';

const SkillCard: React.FC<SkillCardProps> = (props) => {
  const { items } = props;

  const renderCard = () => {
    if (!items) return <></>;

    return items.map((item) => {
      return (
        <div key={item} className="flex flex-col justify-end items-end mb-2">
          {/* title */}
          <div className="flex flex-col p-2 border text-sm">{item}</div>
        </div>
      );
    });
  };

  return <div className="flex flex-1 flex-row justify-end flex-wrap mb-2 gap-4">{renderCard()}</div>;
};

export default SkillCard;
