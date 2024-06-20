import styled from "styled-components";

export default function TextSadLine() {
    return (
        <div className="conteiner_Text_title" >

            <Text className="Text_title" > ПОЧЕМУ ПРОИСХОДЯТ
                ИЗМЕНЕНИЯ В НАШЕЙ ЖИЗНИ?</Text>

        </div>
    );
}



const Text = styled.p`
    font-size:50px;
    text-align:right;
    width:62vw;
    margin-right:8vw;
    font-family:"Bad Script", cursive;

    @media (max-width: 1024px) {
        font-size: 40px;
    text-align: right;
    width: 62vw;
    margin-right: 8vw;
    }

 @media (max-width:820px) {
    font-size: 27px;
        text-align: left;
        width: 75vw;
        margin-left: 6vw;
        font-family: "Bad Script", cursive;
        margin-top: 4vw;
 }
 @media (max-width: 550px) {
    font-size:18px;
 }
`