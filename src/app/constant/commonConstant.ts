import profileImg from "../assets/profileImg.png";
import cwLogo from "../assets/cw_logo.png";
import tiLogo from "../assets/ty_logo.jpeg";
import PDImage1 from "../assets/Hercules.png";
import PDImage2 from "../assets/PDImg2.jpg";
import GDImage1 from "../assets/GDimg1.jpg";
import GDImage2 from "../assets/GDimg2.jpg";
import profileImg2 from "../assets/profileimage2.png";



export const jobTitles = ["UI UX Designer"," Product Designer", "Visual Designer"];

export const tabLabels = [
  {
    id: 1,
    label: "Product Design",
    items: [
      {
        id: 1,
        label: "Graduation Project - TI Cycles of India",
        image: PDImage1,
        docURL: "https://drive.google.com/file/d/1mQ4gpm3CIfwYzCPVp917Bh77sgGt_S3O/view?usp=drive_link",
      },
      {
        id: 2,
        label:"2021 Portfolio - PD",
        image: PDImage2,
        docURL: "https://www.behance.net/gallery/127608911/Portfolio-2021-Product-Design",
      },
      {
        id: 3,
        label: "1Huddle",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        label: "UI Explorations",
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    id: 2,
    label: "Graphic Design",
    items: [
      {
        id: 1,
        label: "Car 3d Rendering",
        image: GDImage1,
        docURL: "https://www.behance.net/gallery/103180423/If-your-model-isnt-high-poly-render-it-as-a-Toy",
      },
      {
        id: 2,
        label: "3d Rendering 2021 explorations",
        image: GDImage2,
        docURL: "https://www.behance.net/gallery/117146493/3d-Modeling-and-Rendering-explorations",
      },
      {
        id: 3,
        label: "Digital Art 2024",
        image: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    id: 3,
    label: "3D Printing",
    items: [
      {
        id: 1,
        label:"2021 Portfolio - PD",
        image: PDImage2,
        docURL: "https://www.behance.net/gallery/127608911/Portfolio-2021-Product-Design",

      },
    ],
  },
  {
    id: 4,
    label: "Blog",
    items: [
      {
        id: 1,
        label:"2021 Portfolio - PD",
        image: PDImage2,
        docURL: "https://www.behance.net/gallery/127608911/Portfolio-2021-Product-Design",

      },
    ],
  },
  {
    id: 5,
    label: "About me",
    items: [
      {
        id: 1,
        label: "Resume",
        image: profileImg2,
        docURL: "https://drive.google.com/file/d/1sfUEjJYyHDqA72m5_-EB3psmtaSYUtx0/view?usp=sharing",
      },
     
    ],
  },
];


export const profileDetails ={
  name: "Nimish Nerlekar",
  profileImage: profileImg,
  email: "nimishnerlekarwork@gmail.com",
  about:"I’m a creative Product Designer with a passion for UI/UX and problem-solving. I have experience in game-tech, data analysis, psychology, and 3D printing. I design human-centered solutions that make an impact, driven by curiosity and a desire to create work that truly engages and delights.",
  experienceYears:"2",
  linkedIn:"https://www.linkedin.com/in/nimish-nerlekar/",
  behance:"https://www.behance.net/NimishNerlekar",
  resume:"https://drive.google.com/file/d/1sfUEjJYyHDqA72m5_-EB3psmtaSYUtx0/view?usp=sharing",
  workExperience:[{
    id:1,
    designation:"Product Designer II",
    company:"Codewalla",
    duration:"Sept 2024 - Present",
    companyLogo:"../assets/cw_logo.png",
  },
  {
    id:2,
    designation:"Product Designer I",
    company:"Codewalla",
    duration:"July 2022 - July 2024",
    companyLogo:"../assets/cw_logo.png",
  },
  {
    id:2,
    designation:"Junior Industrial Designer",
    company:"TI Cycles of India",
    duration:"Jan 2022 - July 2022",
    companyLogo:tiLogo
  }],
  
}