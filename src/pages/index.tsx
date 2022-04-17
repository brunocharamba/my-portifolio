import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Github from "../components/Github";

const Home: NextPage = () => {
  const buttonStyle = "py-2 px-4 cursor-pointer select-none transition ease-in-out hover:bg-red-400 ";

  return (
    <div>
      <Head>
        <title>bruno charamba</title>
        <meta name="description" content="Bruno's portifolio made in NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main className="flex flex-col items-end px-6 py-4">
        <About />
        <Experience />
        <Skills />
        <Github />
      </main>

      {/* <footer className="">
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
