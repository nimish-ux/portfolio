import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
export const tabLabels = [
  {
    id: 1,
    label: "UI UX",
    items: [
      {
        id: 1,
        label: "Graduation Project - TI Cycles of India",
        image: "../assets/Hercules.png",
      },
      {
        id: 2,
        label: "UI UX",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        label: "UI UX",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        label: "UI UX",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        label: "UI UX",
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    id: 2,
    label: "Product Design",
    items: [
      {
        id: 1,
        label: "Product Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        label: "Product Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        label: "Product Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        label: "Product Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        label: "Product Design",
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    id: 3,
    label: "Graphic Design",
    items: [
      {
        id: 1,
        label: "Product Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        label: "Graphic Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        label: "3D Printing",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        label: "Blog",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        label: "About me",
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    id: 4,
    label: "3D Printing",
    items: [
      {
        id: 1,
        label: "Product Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        label: "Graphic Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        label: "3D Printing",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        label: "Blog",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        label: "About me",
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    id: 5,
    label: "Blog",
    items: [
      {
        id: 1,
        label: "Blog",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        label: "Blog",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        label: "Blog",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        label: "Blog",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        label: "Blog",
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    id: 6,
    label: "About me",
    items: [
      {
        id: 1,
        label: "Product Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        label: "Graphic Design",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        label: "3D Printing",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        label: "Blog",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        label: "About me",
        image: "https://via.placeholder.com/150",
      },
    ],
  },
];
