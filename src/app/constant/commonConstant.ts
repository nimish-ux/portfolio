import profileImg from "../assets/profileImg.png";
import cwLogo from "../assets/cw_logo.png";
import tiLogo from "../assets/ty_logo.jpeg";
import PDImage1 from "../assets/Hercules.png";
import PDImage2 from "../assets/PDImg2.jpg";
import GDImage1 from "../assets/GDimg1.jpg";
import GDImage2 from "../assets/GDimg2.jpg";
import profileImg2 from "../assets/profileimage2.png";
import huddle from "../assets/1huddle.png";
import frame3d from "../assets/frame3d.png";
import router from "../assets/router.png";




export const jobTitles = ["UI UX Designer"," Product Designer", "Visual Designer"];

export const tabLabels = [
  {
    id: 1,
    label: "UI/UX Design",
    items: [
      {
        id: 1,
        label: "Graduation Project - TI Cycles of India",
        image: PDImage1,
        docURL: "https://drive.google.com/file/d/1mQ4gpm3CIfwYzCPVp917Bh77sgGt_S3O/view?usp=drive_link",
      },
      {
        id: 2,
        label: "1Huddle",
        image: huddle,
        docURL: "https://1huddle.co/",
      },
      {
        id: 3,
        label: "UI Explorations",
        image: "1Huddle",
        docURL: "https://1huddle.co/",
      },
    ],
  },
  {
    id: 2,
    label: "Industrial Design",
    items: [
      {
        id: 1,
        label:"2021 Portfolio - PD",
        image: PDImage2,
        docURL: "https://www.behance.net/gallery/127608911/Portfolio-2021-Product-Design",
      },
      {
        id: 2,
        label: "Graduation Project - TI Cycles of India",
        image: PDImage1,
        docURL: "https://drive.google.com/file/d/1mQ4gpm3CIfwYzCPVp917Bh77sgGt_S3O/view?usp=drive_link",
      },
      {
        id: 3,
        label: "CMF explorations - Wifi Router (2021)",
        image: router,
        docURL: "https://drive.google.com/file/d/1Y9taIwz97gdBhO9Ogmn7mWbkgmZH7wa4/view?usp=sharing",
      },

    ],
  },
  {
    id: 3,
    label: "Art & Graphic Design",
    items: [
      {
        id: 1,
        label: "Car 3d Rendering",
        image: GDImage1,
        docURL: "https://www.behance.net/gallery/103180423/If-your-model-isnt-high-poly-render-it-as-a-Toy",
      },
      {
        id: 2,
        label: "Digital Art 2024",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        label: "3d Rendering 2021 explorations",
        image: GDImage2,
        docURL: "https://www.behance.net/gallery/117146493/3d-Modeling-and-Rendering-explorations",
      },

    ],
  },
  {
    id: 4,
    label: "3D Printing & Prototyping",
    items: [
      {
        id: 1,
        label:"Vintage Frame Decoration (Wall Mount)",
        image: frame3d,
        docURL: "https://www.printables.com/model/1026779-vintage-frame-shelf",

      },
    ],
  },
  {
    id: 5,
    label: "Resources",
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
  about:"I’m a UI/UX Product Designer driven by curiosity and a passion for solving real-world problems. I create human-centered, impactful designs that help businesses grow and deliver exceptional user experiences.",
  experienceYears:"2",
  linkedIn:"https://www.linkedin.com/in/nimish-nerlekar/",
  behance:"https://www.behance.net/NimishNerlekar",
  resume:"https://drive.google.com/file/d/1sfUEjJYyHDqA72m5_-EB3psmtaSYUtx0/view?usp=sharing",
  workExperience:
  [{
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