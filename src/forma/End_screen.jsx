import styled from "styled-components";
import "../App.css"


export default function EndScreen() {
    return (
        <div >
            <div class="volnaC"></div>
            <Sogl class="sogl">
                <textSogl class="text_sogl">©Пользовательское соглашение, копирайт</textSogl>
            </Sogl>
        </div>
    );
}

const Sogl = styled.div`
  background-color: #8ba7d3;
  width: 100vw;
`;
const textSogl = styled.p`
  padding-top: 0.3vh;
  display: flex;
  justify-content: center;
  font-size: 23px;
  font-family: "Jost", sans-serif;
`;