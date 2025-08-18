export const float = {
  visible: {
    y: [0, -10, 0], // Vertical movement
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity, // This will make it loop indefinitely
      repeatType: "mirror" // Optional: can specify how the repeat behaves
    }
  },
  hidden: {
    y: 0
  }
}

export const appear = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 }
}

export const slideUp = {
  visible: { y: "0px", opacity: 100 },
  hidden: { y: "100px", opacity: 0 }
}

export const slideDown = {
  visible: { y: "0px", opacity: 1 },
  hidden: { y: "-70px", opacity: 0 }
}

export const slideRight = {
  visible: { x: "0px", opacity: 100 },
  hidden: { x: "-100px", opacity: 0 }
}

export const slideRightTitle = {
  visible: { x: "0px", opacity: 100 },
  hidden: { x: "-100px", opacity: 0, scale: 0.9 }
}

export const slideLeft = {
  visible: { x: "0px", opacity: 100 },
  hidden: { x: "100px", opacity: 0 }
}

export const rollball = {
  visible: { x: "0px", rotate: "360deg", opacity: 1 },
  hidden: { x: "-200px", rotate: "90deg", opacity: 0 }
}

