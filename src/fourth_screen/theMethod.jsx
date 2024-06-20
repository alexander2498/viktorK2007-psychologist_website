import styled from "styled-components";

export default function TheMethod() {
    return (
        <div className="conteiner_Text_title" >

            <Text>  О МЕТОДАХ</Text>

        </div>
    );
}


const Text = styled.p`
    font-size: 50px;
  font-family: "Bad Script", cursive;
  margin-left: 6vw;
  @media (max-width: 1025px) {
    font-size: 37px;
    font-family: "Bad Script", cursive;
    margin-left: 3vw;
  }

  @media (max-width: 769px) {
    font-size: 27px;
    font-family: "Bad Script", cursive;
    margin-left: 6vw;
  }
  @media (max-width: 550px){
    font-size:18px;
  }
`;