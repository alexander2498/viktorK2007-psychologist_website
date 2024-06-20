import styled from "styled-components";

export default function Wefy() {
    return (
        <div className="conteiner_Text_title" >

            <Text >  ЕЩЁ ДЛЯ ВАС</Text>

        </div>
    );
}




const Text = styled.p`
    font-family:"Bad Script", cursive;
    font-size:50px;
    @media (max-width: 820px) {
        font-size:27px;
    }
    @media (max-width: 550px) {
        font-size:18px;
        text-align: left;
    }
`