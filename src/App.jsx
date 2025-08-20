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
import Projects from "./components/Projects";
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
        <section className="w-full h-full flex flex-col justify-between items-center md:flex-row md:justify-between md:items-start gap-4">
          <div className="w-full md:w-[30%] flex flex-col justify-center items-start p-4 pt-24 md:pt-0">
            <div className="w-full flex md:flex-col justify-start items-start gap-4 md:gap-0">
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
            <div className="w-max flex justify-start items-center gap-2 text-white cursor-pointer hover:text-red-400 gap-">
              <FaRegEnvelope
                className="rounded-md text-zinc-700 hover:text-gray-300"
                size={"1.2rem"}
              />{" "}
              diekechi@gmail.com
            </div>
            <div className="w-max flex justify-start items-center gap-2 text-white cursor-pointer hover:text-red-400">
              <div className="w-[1.2rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#3f3f46" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
              </div>{" "}
              @Sydney2O5
            </div>
            <div className="w-max flex justify-start items-center gap-2 text-white cursor-pointer hover:text-red-400">
              <FaLinkedinIn 
                className="rounded-md text-zinc-700 hover:text-gray-300"
                size={"1.2rem"}
              />{" "}
              Dieke Sydney
            </div>


            <button className="border-none w-max mt-4 text-center bg-blue-500 text-white rounded p-2 hover:bg-transparent hover:text-blue-400 border-inherit">Buy me a Cofee</button>
          </div>

          <div className="w-full md:w-[70%] flex flex-col ml-auto">
            <div className="w-full card w-[70%]">
              <h3 className="">Hola!, The name is Sydney</h3>

              <p className="mt-3">
              {"I'm an aspiring Data Scientist Mastering the art of crafting stunning websites, lightening-fast servers, and insightful data analysis"}
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

            <Projects />
            
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

