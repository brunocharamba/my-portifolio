import React from "react";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-6 py-2 z-10">
        <div className="z-10">
          <img src="https://avatars.githubusercontent.com/u/15862685?v=4" alt="" className="block w-16 h-16 border rounded-full" />
        </div>
        <div className="flex flex-row justify-evenly gap-10 text-gray-800">
          <div className="cursor-pointer">aboutme</div>
          <div className="cursor-pointer">exp</div>
          <div className="cursor-pointer">skills</div>
          <div className="cursor-pointer">github</div>
        </div>
      </div>
      <div className="absolute w-full top-14 border z-0"></div>
    </>
  );
};

export default Header;
