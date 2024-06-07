import styled from "styled-components";
import "../App.css"
import { Link } from "react-router-dom";

export default function EndScreen() {
    return (
        <div >
            <div class="volnaC"></div>
            <Sogl class="sogl">
            <Link style={{ textDecoration: "none" }} to="/privacy">
                <TextSogl class="text_sogl">©Пользовательское соглашение, копирайт</TextSogl>
                </Link>
            </Sogl>
        </div>
    );
}

const Sogl = styled.div`
  background-color: #8ba7d3;
  width: 100vw;
  
`;
const TextSogl = styled.p`
  padding-top: 0.3vh;
  display: flex;
  justify-content: center;
  font-size: 23px;
  font-family: "Jost", sans-serif;
  @media (max-width: 769px) {
    padding-top: 0.3vh;
    display: flex;
    justify-content: center;
    font-size: 17px;
    font-family: "Jost", sans-serif;
  }
`;