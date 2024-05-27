import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const TitleBox = styled(Box)(({ theme }) => ({
  color: "white",
  display: "flex",
  justifyContent: "center",
  marginTop: "5vh",
  [theme.breakpoints.down('1300')]: {
    marginTop: "20vh",
  },
}));

export default function Title() {
  return (
    <TitleBox>
      <p style={{ fontSize: "60px" }}>ЖИТЬ - ЗНАЧИТ МЕДЛЕННО РОЖДАТЬСЯ</p>
    </TitleBox>
  );
}