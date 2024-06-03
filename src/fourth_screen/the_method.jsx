import styled from "styled-components";

export default function The_method() {
    return (
        <div className="conteiner_Text_title" >

            <Text>  О МЕТОДАХ</Text>

        </div>
    );
}


const Text = styled.p`
    font-size: 50px;
  font-family: "Bad Script", cursive;
  margin-left: 3vw;
  @media (max-width: 1025px) {
    font-size: 37px;
    font-family: "Bad Script", cursive;
    margin-left: 3vw;
  }
  @media (max-width: 1025px) {
    font-size: 28px;
    font-family: "Bad Script", cursive;
    margin-left: 3vw;
  }
  @media (max-width: 1025px) {
    font-size: 26px;
    font-family: "Bad Script", cursive;
    margin-left: 6vw;
  }
`;