import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaEnvelope } from "react-icons/fa"
import { slideDown } from "../lib/motion"

export default function Navbar() {
  const [isScrollingDown, setIsScrollingDown] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(false)
      } else {
        setIsScrollingDown(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const links = [
    [1, "SKILLS", "#skills"],
    [2, "PROJECT", "#projects"],
    [3, "CONTACT", "#contact"]
  ]

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={slideDown}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
      className={`bg-[#0d1117] fixed ${
        isScrollingDown ? "top-0" : "-top-24"
      } w-full flex justify-between items-center min-h-[10vh] px-6 md:px-12 z-50 transition-all`}
    >
      <a
        href="#about"
        className="hidden md:flex text-xl font-bold"
      >
        SYDNEY {" "}
        <span className="ml-[3px] text-xl font-thin">{"205"}</span>
      </a>

      {/* Desktop Menu */}
      <div className="w-full md:w-max font-thin">
        {links.map(([index, title, route]) => (
          <a
            key={index}
            href={route}
            className="text-white py-[4px] px-6 transition-all duration-200 font-thin hover:underline"
            onClick={() => setIsScrollingDown(false)}
          >
            {title}
          </a>
        ))}
      </div>

      <FaEnvelope className="hidden md:flex" size={"1.5rem"} />
    </motion.nav>
  )
}

