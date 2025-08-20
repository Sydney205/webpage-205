// React
import { useState } from "react";

// libs
import { workArrays, favWorksArray } from "../lib/works";

// Icons
import { FaGithub, FaGlobe, } from "react-icons/fa";

export default function Projects() {  
  const [showMore, setShowMore] = useState(false);
  
  const favCard = favWorksArray.map((item, index) => (
    <div>
      <a
        href={ 
          item.site
          ? item.site
          : item.github
        }
        className="card w-full h-full md:h-max lg:h-full flex flex-col justify-between items-start p-4 border border-transparent hover:bg-zinc-800/30 hover:border-white hover:border-neutral-800 hover:bg-aqua_green hover:cursor-pointer"
      >
        <span className="w-full h-max">
          <span className="flex gap-2 mb-2">
            <p className="font-bold">{item.name}</p>
            <p
              className={
                item.status == "Live"
                  ? "h-max border border-green-600 rounded-xl text-green-600 text-md py-[2px] px-2"
                  : item.status == "Down"
                    ? "h-max border border-red-600 rounded-xl text-red-600 text-sm py-[2px] px-2"
                    : item.status == "Published"
                      ? "h-max border border-blue-600 rounded-xl text-blue-600 text-sm py-[2px] px-2"
                      : item.status == "Upcoming"
                        ? "h-max border border-yellow rounded-xl text-yellow text-sm py-[2px] px-2"
                          : item.status == "New"
                          ? "h-max bg-indigo-600 border border-indigo-600 rounded-xl text-white text-sm py-[2px] px-2"
                            : item.status == "Paused"
                            ? "h-max border border-indigo-600 rounded-xl text-indigo-600 text-sm py-[2px] px-2"
                              : "h-max border border-gray-400 rounded-xl text-gray-400 text-sm py-[2px] px-2"
              }
            >
              {item.status}
            </p>
          </span>
          <p className="flex text-sm text-base">{item.desc}</p>
        </span>

        <span className="w-[90%] md:w-full lg:w-[90%] mt-5 flex flex-wrap flex-row-reverse justify-between items-center gap-2">
          <span className="w-max flex gap-2">
            <a href={item.github}>
              <FaGithub />
            </a>
            {item.status == "Down" ? "" : !item.site ? "" : <a href={item.site}><FaGlobe /></a>}
          </span>

          <span className="w-max flex gap-2">
            {item.tools.map((tools, index) => (
              <span 
                key={index} 
                className="h-max text-sm rounded-xl text-gray-600 bg-transparent border border-gray-600 py-[2px] px-2"
              >{tools}</span>
            ))}
          </span>
        </span>
      </a>
    </div>
  ));
  
  const projectCard = workArrays.map((item, index) => (
  
  <div>
    <a
      href={ 
        item.site
        ? item.site
        : item.github
      }
      className="card w-full h-full flex flex-col justify-between items-start p-4 border border-transparent hover:bg-zinc-800/30 hover:border-white hover:border-neutral-800 hover:bg-aqua_green hover:cursor-pointer"
    >
      <span className="w-full h-max">
        <span className="flex gap-2 mb-2">
          <p className="font-bold">{item.name}</p>
          <p
            className={
              item.status == "Live"
                ? "h-max border border-green-600 rounded-xl text-green-600 text-sm py-[2px] px-2"
                : item.status == "Down"
                  ? "h-max border border-red-600 rounded-xl text-red-600 text-sm py-[2px] px-2"
                  : item.status == "Published"
                    ? "h-max border border-blue-600 rounded-xl text-blue-600 text-sm py-[2px] px-2"
                    : item.status == "Upcoming"
                      ? "h-max border border-yellow rounded-xl text-yellow text-sm py-[2px] px-2"
                        : item.status == "New"
                        ? "h-max bg-indigo-600 border border-indigo-600 rounded-xl text-white text-sm py-[2px] px-2"
                          : item.status == "Paused"
                          ? "h-max border border-indigo-600 rounded-xl text-indigo-600 text-sm py-[2px] px-2"
                            : "h-max border border-gray-400 rounded-xl text-gray-400 text-sm py-[2px] px-2"
            }
          >
            {item.status}
          </p>
        </span>
        <p className="flex text-sm text-base">{item.desc}</p>
      </span>

      <span className="w-[90%] md:w-full lg:w-[90%] mt-5 flex flex-wrap flex-row-reverse justify-between items-center gap-2">
        <span className="w-max flex gap-2">
          <a href={item.github}>
            <FaGithub />
          </a>
          {item.status == "Down" ? "" : !item.site ? "" : <a href={item.site}><FaGlobe /></a>}
        </span>

        <span className="w-max flex gap-2">
          {item.tools.map((tools, index) => (
            <span 
              key={index} 
              className="h-max text-sm rounded-xl text-gray-600 bg-transparent border border-gray-600 py-[2px] px-2"
            >{tools}</span>
          ))}
        </span>
      </span>
    </a>
  </div>
  ));
  
  return (
    <>
      <span 
        id="projects"
        className="w-full h-max flex flex-col md:grid grid-cols-2 gap-2"
      >
        { showMore ? projectCard : favCard }
      </span>
        <button 
          onClick={() => setShowMore(!showMore)}
          className="cursor-pointer my-2"
        >
          { showMore ? "See less" : "See all" }
        </button>
    </>
  )
}
