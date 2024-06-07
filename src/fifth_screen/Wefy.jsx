import styled from "styled-components";

export default function Wefy() {
    return (
        <div className="conteiner_Text_title" >

            <Text >  ЕЩЁ ДЛЯ ВАС</Text>

        </div>
    );
}


const styles = {
    style: {
        fontFamily: '"Bad Script", cursive', fontSize: "50px"
    }
}

const Text = styled.p`
    font-family:"Bad Script", cursive;
    font-size:50px;
    @media (max-width: 769px) {
        font-size:33px;
    }
    @media (max-width: 431px) {
        font-size:26px;
        text-align: left;
    }
`