import React from "react";
import styled from "styled-components";
import TopButton from "../buttons/topButton";
import MenuM from "../buttons/menu";
import { Box } from "@mui/material";
import "../App.css"
const MenuNone = styled.div`
    display: flex;
  margin-right: 2vw;
  justify-content: flex-end;
  padding-top: 4vh;
  font-size: 26px;
  @media (max-width: 431px) {
    display: none;
  }
`;

const MenuDisplay = styled.div`
  display: none;
  @media (max-width: 431px) {
    display: block;
  }
`;

export default function MenuTitle() {
  return (
    <div>
      <MenuNone>
        <TopButton border={'none'} backgroundColor={'rgba(255, 255, 255, 0.4)'} sign="о методах" />
        <TopButton border={'none'} backgroundColor={'rgba(255, 255, 255, 0.4)'} sign="о сеансах" />
        <TopButton border={'none'} backgroundColor={'rgba(255, 255, 255, 0.4)'} sign="об образовании" />
        <TopButton border={'none'} backgroundColor={'rgba(255, 255, 255, 0.4)'} sign="как связаться" />
      </MenuNone>
      <MenuDisplay>
        <MenuM />
      </MenuDisplay>
    </div>
  );
}
