
import { Grid } from "@mui/material";
import styled from "styled-components";

export default function PriceBlock() {
    return (
        <Grid display={'block'} height={'20vh'}>

        <BlokFlex >
            <Blok1 >
                <BlokBackground1 >
                    <BlokBackground1Text1 >
                        <Price2 >СЕССИЯ ЗНАКОМСТВО<br/>
                            Цена: 4 000 руб.<br/>Продолжительность: 60 мин</Price2>
                    </BlokBackground1Text1>

                    <BlokBackground1Text2 >
                        <Price2 >СЕССИЯ КОУЧИНГА<br/>
                        Цена: 4 000 руб.<br/>
                        Продолжительность: 45 мин</Price2>
                    </BlokBackground1Text2 >
                </BlokBackground1>
            </Blok1 >
            <VLine ></VLine>
            <Blok2 >

                <BlokBackground2 >
                    <BlokBackground2Text1 >
                        <Price1 > ГУМАНИСТИЧЕСКИЙ ГИПНОЗ, АРТ-ТЕРАПИЯ<br/>
                        Продолжительность: до 1.5 ч<br/>
                        Цена онлайн: 5000 руб.<br/>
                        Цена очно: 8000 руб.</Price1>
                    </BlokBackground2Text1>
                    <BlokBackground2Text2 >
                        <Price1 >
                            Работа с группами, парами по запросу.<br/>Работаю со взрослыми, подростками от 15 лет.</Price1>

                    </BlokBackground2Text2>
                </BlokBackground2>

            </Blok2>
        </BlokFlex>
        </Grid>

    );
}

const BlokFlex = styled.div`
            display: flex;
            @media (max-width: 550px) {
  
}
            `;

const Price2 = styled.p`
            width: 30vw;
            font-family: "Jost", sans-serif;
            @media (max-width: 550px) {
                width: 77vw;
            }
            `;
const Blok1 = styled.div`
            position: relative;
            @media (max-width: 550px) {
                
            }
            `;

const BlokBackground1 = styled.div`
            background-color: #ebe0e0;
            border-radius: 60px;
            position: absolute;
            margin-left: 10vw;
            box-shadow: 14px 0px 0px rgb(128, 160, 208);
            height: 44vh;
            width: 35vw;
            margin-left:60vw;
            @media (max-width: 550px) {
                width: 91vw;
                height:auto;
    background-color: #ebe0e0;
    border-radius: 30px;
    position: absolute;
    margin-left: 4vw;
    box-shadow: 10px 0px 1px rgb(128, 160, 208);
            }
            `;

const BlokBackground1Text1 = styled.div`
            padding: 1em;
            font-size: 22px;
            border-bottom: 1px solid gray;
            @media (max-width: 820px) {
                padding: 1em;
            font-size: 16px;
            border-bottom: 1px solid gray;
            margin-top: 1vh;
    }
    @media (max-width: 550px) {
        padding: 1em;
    font-size: 15px;
    border-bottom: 1px solid gray;
    margin-top: 1vh;
}
            `;
const BlokBackground1Text2 = styled.div`
            padding: 1em;
            font-size: 22px;
            margin-top: 1vh;
            width: 30vw;
            @media (max-width: 820px) {
                padding: 1em;
            font-size: 16px;
            padding-bottom: 2em;
    }
    @media (max-width: 550px) {
        padding: 1em;
    font-size: 15px;
    padding-bottom: 2em;
}
            `;
const VLine = styled.div`
            position: absolute;
            height: 34vh;
            border-right: 1px solid;
            margin-left: 50.4vw;
            margin-top: 3vh;
    @media (max-width: 550px) {
    
    display:none;
  }
            `;
const Blok2 = styled.div`
            position: relative;
            `;
const BlokBackground2 = styled.div`
            margin-left: 60vw;
            background-color: #ebe0e0;
            border-radius: 60px;
            position: absolute;
            box-shadow: 13px 0px 0px rgb(227, 199, 202);
            height: 44vh;
            width: 35vw;
            margin-left:5vw;

            @media (max-width: 820px) {
                margin-left: 5vw;
            background-color: #ebe0e0;
            border-radius: 60px;
            position: absolute;
            box-shadow: 13px 0px 0px rgb(227, 199, 202);
    }
    @media (max-width: 550px) {
        margin-left: 4vw;
    width: 91vw;
    height:auto;
    background-color: #ebe0e0;
    border-radius: 30px;
    position: absolute;
    margin-top: 32vh;
    box-shadow: 10px 0px 1px rgb(226, 199, 202);
}
            `;
const BlokBackground2Text1 = styled.div`
            margin-top: 1vh;
            font-size: 22px;
            border-bottom: 1px solid gray;
            @media (max-width: 820px) {
             margin-top: 1vh;
            font-size: 16px;
            border-bottom: 1px solid gray;
            
    }
    @media (max-width: 550px) {
        margin-top: 1vh;
    font-size: 15px;
    border-bottom: 1px solid gray;
}
            `;
const BlokBackground2Text2 = styled.div`
            font-size: 22px;
            width: 30vw;
            @media (max-width: 820px) {
                font-size: 16px;
            margin-top: 1vh;
            width: 30vw;
        }
            @media (max-width: 550px) {
                font-size: 15px;
                margin-top: 1vh;
                width: 77vw;

      
    }
            `;
const Price1 = styled.p`
            padding: 1em;
            font-family: "Jost", sans-serif;
            `;



