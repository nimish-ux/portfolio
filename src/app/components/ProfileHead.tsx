import React from "react";
import { Box, Avatar } from "@mui/material";
import Image from "next/image";
import backrounImg from "../assets/Group 61@2x.png"; // Adjust the path accordingly
import { profileDetails } from "../constant/commonConstant";
import profileImg from "../assets/profileImg.png"; // Import the image
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  position: absolute;
  top: 70px;
  left: 65px;
  width: 120px;
  height: 120px;
  border: 1px solid #707070;
  border-radius: 10px;
  z-index: 100;
  overflow: hidden;

  @media (max-width: 768px) {
    top: 100px;
    left: 32px;
    width: 100px;
    height: 100px;
  }
`;

const ProfileHead: React.FC = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          position: "relative",
          width: "100%",
          height: "16%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid #707070",
          background: "#25272c",
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        })}
      >
        <StyledDiv>
          <Image
            src={profileImg}
            alt="avatar"
            layout="fill"
            objectFit="cover"
          />
        </StyledDiv>
      </Box>
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: "-50px",
          width: "100%",
          zIndex: 10,
          height: "250px",
          objectFit: "cover",
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        })}
      >
        <Image
          src={backrounImg}
          alt="background"
          layout="fill"
          objectFit="cover"
          style={{
            position: "absolute",
            width: "100%",
            left: "0px",
            top: "-35px",
            right: "0",
            bottom: "0",
            objectFit: "cover",
            color: "transparent",
          }}
        />
      </Box>
     
    </>
  );
};

export default ProfileHead;
