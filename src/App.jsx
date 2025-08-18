import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { MdEmail } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";

import { langArrays } from "./lib/lang";
import { workArrays } from "./lib/works";

// ======================
// Component Imports
// ======================
import { ReactTyped } from "react-typed"; // A component for typewriter effect text
// import LangChart from "./components/LangChart";
import BarChart from "./components/BarChart";
import PieChart1 from "./components/PieChart1";
import PieChart2 from "./components/PieChart2";
// import Projects from "./components/Projects";
import EmailForm from "./components/EmailForm";
// import DownloadLink from "./components/DownloadLink";
// import Footer from "./components/Footer";

// ======================
// Icon Imports
// ======================
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaCloudDownloadAlt,
  FaLinkedinIn,
  FaRegEye,
} from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
// import XTwitter from "./components/XTwitter";

function App() {
  const langIcons = langArrays.map((item, index) => (
    <img
      key={index}
      src={`/icons/${item}-colored.svg`} // Path to the icon image
      width={30}
      height={30}
      alt={`${item} icon`} // Alternative text for accessibility
    />
  ));
  return (
    <>
      <Navbar />
      <main className="w-full h-screen md:p-26 flex justify-center items-center">
        <section className="w-full h-full flex flex-col justify-start items-center md:flex-row md:justify-between md:items-start gap-4">
          <div className="w-full md:fixed md:w-[30%] flex flex-col justify-center p-4 pt-24 md:pt-0">
            <div className="w-full flex md:flex-col justify-start items-end gap-4 md:gap-0">
              <img
                src="/me.jpg"
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover object-[23%_23%] profile_pic"
              />
              <div className="gap-0">
                <h4>Dieke Sydney</h4>
                <p className="font-thin text-xl">Sydney205</p>
              </div>
            </div>

            <p className="my-3">Developer</p>
            <div className="w-max flex justify-start items-center gap-2 text-gray-400 cursor-pointer hover:text-red-400">
              <FaRegEnvelope
                className="rounded-md text-white hover:text-gray-300"
                size={"1.2rem"}
              />{" "}
              diekechi@gmail.com
            </div>
            <div className="w-max flex justify-start items-center gap-2 text-gray-400 cursor-pointer hover:text-white">
              <FaRegEnvelope
                className="rounded-md text-white hover:text-gray-300"
                size={"1.2rem"}
              />{" "}
              @Sydney2O5
            </div>


            <button className="border-none w-max mt-4 text-center bg-blue-500 text-white hover:bg-transparent hover:text-blue-400 border-inherit">Buy me a Cofee</button>
          </div>

          <div className="w-full md:w-[70%] flex flex-col ml-auto">
            <div className="w-full card w-[70%]">
              <h3 className="">Hola!, The name is Sydney</h3>

              <p className="mt-3">
                Mastering the art of crafting stunning websites, lightening-fast
                servers, and insightful data analysis
              </p>
            </div>

          <div 
            id="skills"
            className="card w-full flex flex-col justify-center items-center"   
          >
            <h6>Tech i love</h6>
            <div className="w-full flex flex-wrap justify-center items-center gap-2 grow md:justify-start md:gap-auto">
              {langIcons}
            </div>
          </div>

            {/* Card containing a BarChart component */}
            <div className="w-full h-max card flex flex-col justify-start items-center">
              <BarChart />
            </div>

            {/* Container for the two pie charts */}
            <div className="w-full flex flex-col md:flex-row gap-2">
              {/* First PieChart component */}
              <div className="w-full md:w-[50%] h-[40vh] flex justify-center items-center card">
                <PieChart1 />
              </div>

              {/* Second PieChart component */}
              <div className="w-full md:w-[50%] h-[40vh] flex justify-center items-center card">
                <PieChart2 />
              </div>
            </div>
            <div className="w-full">
              <h4 className="p-4">Drop a message</h4>
              <EmailForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

/*
My name is Dieke Chinedu Sydney, I'm a tech enthusiast, and i'm from Nigeria.

On January 7th, 2022, my life took a new turn when i accidentally opened Command Line Interface and that small moment sparked a big curiosity leading me to freeCodeCamp, where i earned my first certification as a Reponsive web designer.

Today, my passion lives at the intersection of data science and frontend development, and aside tech i love music and playing chess.

My aim is to become a data scientist and i hope to develop a solution that will help Nigerian school improve teaching methods, close learning gaps and track performance

from that pivotal day to now, my purpose remains clear: to ins

















*/
