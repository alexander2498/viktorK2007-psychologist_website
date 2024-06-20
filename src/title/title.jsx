import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const TitleBox = styled(Box)(({ theme }) => ({
  color: "white",
  display: "flex",
  justifyContent: "center",
  marginTop: "5vh",
  fontSize: "60px",
  [theme.breakpoints.down('1301')]: {
    marginTop: "5vh",
    fontSize: "55px"
  },
  [theme.breakpoints.down('1025')]: {
    marginTop: "7vh",
    fontSize: "45px"
  },
  [theme.breakpoints.down('769')]: {
    fontSize: "35px"
  },
  [theme.breakpoints.down('550')]: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    marginTop: "10vh",
    width: "60vw",
    height: "19vh",
    marginLeft: "20vw",
    textAlign: "center",
    fontSize: "30px"
  },
}));

export default function Title() {
  return (
    <TitleBox>
      <p >ЖИТЬ - ЗНАЧИТ МЕДЛЕННО РОЖДАТЬСЯ</p>
    </TitleBox>
  );
}