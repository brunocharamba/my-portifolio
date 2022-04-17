import React from "react";
import { BrowserView as BrowserViewOrig } from "react-device-detect";

const Header: React.FC = () => {
  const BrowserView: any = BrowserViewOrig;

  return (
    <>
      <div className="flex flex-row justify-between items-center px-6 py-8 z-10">
        <div className="z-10" suppressHydrationWarning={true}>
          <BrowserView>
            <img src="https://avatars.githubusercontent.com/u/15862685?v=4" alt="" className="absolute w-16 h-16 border rounded-full -mt-7" />
          </BrowserView>
        </div>

        <div className="flex flex-row justify-evenly gap-10 text-gray-800">
          <div className="cursor-pointer">aboutme</div>
          <div className="cursor-pointer">exp</div>
          <div className="cursor-pointer">skills</div>
          <div className="cursor-pointer">github</div>
        </div>
      </div>
      <div className="w-full -mt-6 top-14 border z-0"></div>
    </>
  );
};

export default Header;
