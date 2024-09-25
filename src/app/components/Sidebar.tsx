import React from "react";
import { Box, Typography, Avatar, Tooltip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import Header from "./Header";
import { profileDetails } from "../constant/commonConstant";
import cwLogo from "../assets/cw_logo.png";
import tiLogo from "../assets/ty_logo.jpeg";
import Image from 'next/image';

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1F1F1F",
        color: "white",
        paddingTop: "86px",
        paddingLeft: "62px",
        width: "30%",
      }}
    >
      <Header />
      <Box sx={{ mb: 3, pt: 3 }}>
        <Typography
          variant="h5"
          component="h4"
          sx={{ fontSize: "18px", fontWeight: "semibold" }}
        >
          About
        </Typography>
        <Tooltip title={profileDetails.about}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "14px",
            paddingRight: "20px",
            pt: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >

         {profileDetails.about}
        </Typography>
         </Tooltip>
      </Box>
      <Box>
        <Typography variant="h5" component="h4" sx={{ fontSize: "18px", fontWeight: "semibold" }}>
          Work Experience ({profileDetails.experienceYears}+ years)
        </Typography>
        <Box
          sx={{
            mt: 2,
            height: "166px",
            overflowY: "auto",
            scrollbarWidth: "3px",
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
              style={{ width: 40, height: 40 }}
              />
              <Box sx={{ ml: 4 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {items.designation}
                </Typography>
                <Typography variant="body2">{items.company}</Typography>
                <Typography variant="body2">{items.duration}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Typography
          variant="body2"
          color="#707070"
          align="left"
          sx={{ paddingBottom: "5px", mt: 0 }}
        >
          
          
          © 2024 Nimish Nerlekar. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
