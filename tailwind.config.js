const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#171b23"
        },
        yellow: {
          DEFAULT: "#F9C74F"
        },
        blue: {
          DEFAULT: "#00B4D8"
        },
        dark_blue: {
          DEFAULT: "#03045E"
        },
        light: {
          DEFAULT: "#F1FAFB"
        },
        aqua_green: {
          DEFAULT: "#90E0EF"
        },
        customYellow: "#FFD700",
        customBlue: "#1E90FF"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      keyframes: {
        shake: {
          "0%": { "margin-left": "-1rem" },
          "10%": { "margin-left": "1rem" },
          "30%": { "margin-left": "-1rem" },
          "50%": { "margin-left": "1rem" },
          "70%": { "margin-left": "-1rem" },
          "100%": { "margin-left": "1rem" }
        },
        slide_show: {
          "50%": { "margin-left": "20%" },
          "100%": { "margin-left": "0%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" }
        }
      },
      animation: {
        shake: "shake 0.5s ease-in-out 1",
        float: "float 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
}

export default config


// <div class="relative h-screen">
//   <!-- Background Pattern -->
//   <div class="absolute inset-0">
//     <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
//   </div>
  
//   <!-- Hero Content -->
//   <div class="relative z-10 flex h-full flex-col items-center justify-center px-4">
//     <div class="max-w-3xl text-center">
//       <h1 class="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
//         Your Next Great
//         <span class="text-sky-400">Project</span>
//       </h1>
//       <p class="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
//         Build modern and beautiful websites with this collection of stunning background patterns. 
//         Perfect for landing pages, apps, and dashboards.
//       </p>
//       <div class="flex flex-wrap justify-center gap-4">
//         <button class="rounded-lg px-6 py-3 font-medium bg-sky-400 text-slate-900 hover:bg-sky-300">
//           Get Started
//         </button>
//         <button class="rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
//           Learn More
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
