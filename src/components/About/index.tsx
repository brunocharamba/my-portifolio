import React from "react";
import { ComponentProps } from "../../types";

const buttonStyle = "p-2 border text-right text-sm cursor-pointer hover:bg-gray-600 hover:text-gray-100";

const About: React.FC<ComponentProps> = (props) => {
  const { isMobile } = props;

  const getYear = () => {
    const today = new Date();
    const birth = new Date(1989, 2, 1);
    let years = today.getFullYear() - birth.getFullYear();

    if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) years--;

    return years;
  };

  return (
    <div className={`flex flex-col justify-center mb-4 w-1/2 ${isMobile && "w-full"}`}>
      {/* About title */}
      <div className="flex-col text-right">
        <div className="text-lg font-bold">about me</div>
      </div>
      {/* Separator */}
      <div className="mb-2 text-right">.</div>
      {/* About content */}
      <div className="text-md text-gray-600 text-justify">
        <b className="text-md">
          Hi! I&apos;m a full stack developer who searches for new and promising technologies to build and enhance my knowledge and projects that I participate.
        </b>
        <br />
        <br />
        I&apos;m {getYear()} years old programmer from Brazil who studied in Universidade de Pernambuco for my bachelor&apos;s degree, and since have been working and learning new
        technologies related to the IT industry with no prejudice from any area: frontend, backend, mobile or whatever. <br />
        <b>If it&apos;s cool, i&apos;m in.</b>
        <br />
        <br />
        If you want to contact me for any reason, feel free to do it, I&apos;m always looking for new opportunities and things to do. At the bottom you can find some links to my
        social networks and other useful content.
      </div>
      {/* Button wrapper */}
      <div className="flex flex-row justify-end mt-4 gap-4">
        <div className={buttonStyle} onClick={() => window.open("https://www.linkedin.com/in/bruno-charamba/", "_blank")}>
          LINKEDIN
        </div>
        <div className={buttonStyle} onClick={() => window.open("mailto:brunocharamba@gmail.com")}>
          SEND EMAIL
        </div>
        <div className={buttonStyle}>
          <a href="/bruno_resume.pdf">DOWNLOAD RESUME</a>
        </div>
      </div>
    </div>
  );
};

export default About;
