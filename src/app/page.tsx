"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProfileHead from "./components/ProfileHead";
import backGroundImg from "./assets/topBackground.png";
import styled from '@emotion/styled';


const FlexContainer = styled.div`
  display: flex;
  height: 84%;
  overflow-y: auto;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  @media (max-width: 768px) {
    flex-direction: column;
      height: 100%;
  }
`;


export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`h-screen 	 ${theme === "dark" ? " text-white" : " text-black"}`}
      style={{ backgroundColor: theme === "dark" ? "#1B1D21" : "#FFFFFF",overflowY: "auto" }}
    >
   
      {/* <Header /> */}
      <ProfileHead />
      <FlexContainer>
        <Sidebar />
        <MainContent />
      </FlexContainer>
      {/* <button onClick={toggleTheme} className="p-2 m-4 border rounded">
        Toggle Theme
      </button> */}
    </div>
  );
}
