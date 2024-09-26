import React from "react";
import { Box, Typography, Button, IconButton, colors } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BrushIcon from "@mui/icons-material/Brush";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import JobTitleText from "./JobTitleText";

import styled from "@emotion/styled";
import { profileDetails } from "../constant/commonConstant";
import Image from "next/image";

const Buttons = styled.button`
  background: #25272c;
  border-radius: 8px;
  border: 1px solid #707070;
  padding: 8px 16px;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const buttonStyles = {
  background: "#25272C",
  borderRadius: "8px",
  fontSize: "14px",
  color: "white",
  border: "1px solid #707070",
};
const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1, width: "100%" }}>
        <Box>
          <Typography
            variant="h4"
            style={{ fontSize: "28px" }}
            component="h3"
            sx={{ fontWeight: "bold" }}
          >
            Hi, I&apos;m {profileDetails.name}
          </Typography>
          <Typography variant="body1">{profileDetails.email}</Typography>
          <div className="flex items-center mt-2" style={{ height: "50px" }}>
            <JobTitleText />
          </div>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
        <IconButton
          sx={buttonStyles}
          target="_blank"
          href={profileDetails.resume}
        >
          Resume
        </IconButton>
        <IconButton
          sx={buttonStyles}
          color="inherit"
          target="_blank"
          href={profileDetails.linkedIn}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          sx={buttonStyles}
          color="inherit"
          target="_blank"
          href={profileDetails.behance}
        >
          <Image
            src={require("../assets/behance.png")}
            alt="avatar"
            width="20"
            height="20"
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
