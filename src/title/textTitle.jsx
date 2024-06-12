import styled from "styled-components";

export default function TextTitle() {
    return (
        <div className="conteiner_Text_title" >
            
                <Text>ОБО МНЕ</Text>
           
        </div>
    );
}




const Text = styled.p`
    font-size: 47px;
    margin-left: 26vw;
    font-family: "Bad Script", cursive;

@media (max-width:769px ) {
    font-size: 27px;
    margin-left: 6vw;
    margin-top: 4vh;
    font-family: "Bad Script", cursive;
    
}

@media (max-width:431px ) {
    font-size: 27px;
    margin-left: 31vw;
    margin-top: 2vh;
    font-family: "Bad Script", cursive;
}
`;