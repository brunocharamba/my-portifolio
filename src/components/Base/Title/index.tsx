import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex-col text-right">
      <div className="text-lg font-bold">{title}</div>
    </div>
  );
};

export default Title;
