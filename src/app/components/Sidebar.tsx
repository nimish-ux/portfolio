import React from "react";
import { Box, Typography, Avatar, Tooltip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import Header from "./Header";
import { profileDetails } from "../constant/commonConstant";
import cwLogo from "../assets/cw_logo.png";
import tiLogo from "../assets/ty_logo.jpeg";
import Image from "next/image";

import profileImg from "../assets/profileImg.png"; // Import the image

const Sidebar = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: "#0A0E13",
        color: "white",
        paddingTop: "86px",
        paddingLeft: "62px",
        width: "30%",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          paddingLeft: "32px",
          paddingTop: "40px",
          width: "100%", // Adjust width for mobile view if needed
        },
      })}
    >
      <Box
        sx={(theme) => ({
          width: "120px",
          height: "120px",
          border: "1px solid #707070",
          borderRadius: "10px",
          marginBottom: "10px",
          zIndex: 100,
          overflow: "auto",
          display: "none",
          [theme.breakpoints.down("md")]: {
            display: "block",
          },
        })}
      >
        <Image src={profileImg} alt="avatar" objectFit="cover" />
      </Box>
      <Header />
      <Box sx={{ mb: 5, pt: 5 }}>
        <Typography
          variant="h5"
          component="h4"
          sx={{ fontSize: "18px", fontWeight: "bold" }}
        >
          About
        </Typography>
        <Tooltip title={profileDetails.about}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: "regular",
              paddingRight: "20px",
              pt: 1,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 6,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {profileDetails.about}
          </Typography>
        </Tooltip>
      </Box>
      <Box>
        <Typography
          variant="h5"
          component="h4"
          sx={{ fontSize: "18px", fontWeight: "bold" }}
        >
          Work Experience ({profileDetails.experienceYears}+ years)
        </Typography>
        <Box
          sx={{
            mt: 2,
            height: "150px",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {profileDetails.workExperience.map((items, index) => (
            <Box
              key={items.id}
              sx={{ display: "flex", alignItems: "center", mb: 3 }}
            >
              <Image
                src={items.company === "Codewalla" ? cwLogo : tiLogo}
                alt="Profile"
                style={{ borderRadius: "8px", width: 40, height: 40 }}
              />
              <Box sx={{ ml: 4 }}>
                <Typography variant="body1" sx={{ fontWeight: "semibold" }}>
                  {items.designation}
                </Typography>
                <Typography variant="body2">{items.company}</Typography>
                <Typography variant="body2">{items.duration}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {/* <Typography
          variant="body2"
          color="#707070"
          align="left"
          sx={{ paddingTop: "20px", mt: 0 }}
        >
          
          
          © 2024 Nimish Nerlekar. All rights reserved.
        </Typography> */}
      </Box>
    </Box>
  );
};

export default Sidebar;
