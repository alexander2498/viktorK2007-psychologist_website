
import { Box } from "@mui/material";
import PriceContainer from "./priceContainer";
import styled from "styled-components";

export default function PriceBlock({ }) {
    return (

        <BlokFlex class="blok_flex">
            <Blok1 class="blok_1">
                <BlokBackground1 class="blok_backgound_1">
                    <BlokBackground1Text1 class="blok_backgound_1_text1">
                        <Price2 class="price_2"> СЕССИЯ ЗНАКОМСТВО
                            4 000, продолжительность 60 мин</Price2>
                    </BlokBackground1Text1>

                    <BlokBackground1Text2 class="blok_backgound_1_text2">
                        <Price2 class="price_2"> СЕССИЯ КОУЧИНГА 45 минут 4 000</Price2>
                    </BlokBackground1Text2 >
                </BlokBackground1>
            </Blok1 >
            <VLine class="V_line"></VLine>
            <Blok2 class="blok_2">

                <BlokBackground2 class="blok_backgound_2">
                    <BlokBackground2Text1 class="blok_backgound_2_text1">
                        <Price1 class="price_1"> ГУМАНИСТИЧЕСКИЙ ГИПНОЗ, АРТ-ТЕРАПИЯ до 1.30 мин, 5000 онлайн или 8000 очно </Price1>
                    </BlokBackground2Text1>
                    <BlokBackground2Text2 class="blok_backgound_2_text2">
                        <Price1 class="price_1">
                            РАБОТА С: группами, парами по запросу. работаю со взрослыми, подростками от 15 лет.</Price1>

                    </BlokBackground2Text2>
                </BlokBackground2>

            </Blok2>
        </BlokFlex>

    );
}

const BlokFlex = styled.div`
            display: flex;
            @media (max-width: 431px) {
  
}
            `;

const Price2 = styled.p`
            width: 26vw;
            @media (max-width: 431px) {
                width: 77vw;
            }
            `;
const Blok1 = styled.div`
            position: relative;
            @media (max-width: 431px) {
                
            }
            `;

const BlokBackground1 = styled.div`
            background-color: #ebe0e0;
            border-radius: 60px;
            position: absolute;
            margin-left: 10vw;
            box-shadow: 14px 0px 0px rgb(128, 160, 208);
            @media (max-width: 431px) {
                width: 91vw;
    background-color: #ebe0e0;
    border-radius: 30px;
    position: absolute;
    margin-left: 4vw;
    box-shadow: 10px 0px 1px rgb(128, 160, 208);
            }
            `;

const BlokBackground1Text1 = styled.div`
            padding: 1em;
            font-size: 26px;
            border-bottom: 1px solid gray;
            @media (max-width: 769px) {
                padding: 1em;
            font-size: 18px;
            border-bottom: 1px solid gray;
            margin-top: 1vh;
    }
    @media (max-width: 431px) {
        padding: 1em;
    font-size: 15px;
    border-bottom: 1px solid gray;
    margin-top: 1vh;
}
            `;
const BlokBackground1Text2 = styled.div`
            padding: 1em;
            font-size: 26px;
            margin-top: 1vh;
            width: 30vw;
            @media (max-width: 769px) {
                padding: 1em;
            font-size: 18px;
            padding-bottom: 2em;
    }
    @media (max-width: 431px) {
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
    @media (max-width: 431px) {
    
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

            @media (max-width: 769px) {
                margin-left: 59vw;
            background-color: #ebe0e0;
            border-radius: 60px;
            position: absolute;
            box-shadow: 13px 0px 0px rgb(227, 199, 202);
    }
    @media (max-width: 431px) {
        margin-left: 4vw;
    width: 92vw;
    background-color: #ebe0e0;
    border-radius: 30px;
    position: absolute;
    margin-top: 22vh;
    box-shadow: 10px 0px 1px rgb(226, 199, 202);
}
            `;
const BlokBackground2Text1 = styled.div`
            margin-top: 1vh;
            font-size: 26px;
            border-bottom: 1px solid gray;
            @media (max-width: 769px) {
             margin-top: 1vh;
            font-size: 18px;
            border-bottom: 1px solid gray;
            
    }
    @media (max-width: 431px) {
        margin-top: 1vh;
    font-size: 15px;
    border-bottom: 1px solid gray;
}
            `;
const BlokBackground2Text2 = styled.div`
            font-size: 24px;
            margin-top: 1vh;
            width: 30vw;
            @media (max-width: 769px) {
                font-size: 18px;
            margin-top: 1vh;
            width: 30vw;
        }
            @media (max-width: 431px) {
                font-size: 15px;
                margin-top: 1vh;
                width: 77vw;

      
    }
            `;
const Price1 = styled.p`
            padding: 1em;
            `;



// .blok_backgound_1 {
//     width: 91vw;
//     background - color: #ebe0e0;
//     border - radius: 30px;
//     position: absolute;
//     margin - left: 4vw;
//     box - shadow: 10px 0px 1px rgb(128, 160, 208);
// }

//   .blok_backgound_1_text1 {
//     padding: 1em;
//     font - size: 15px;
//     border - bottom: 1px solid gray;
//     margin - top: 1vh;
// }

//   .blok_backgound_1_text2 {
//     padding: 1em;
//     font - size: 15px;
//     padding - bottom: 2em;
// }

//   .price_2 {
//     width: 77vw;
// }

//   .blok_backgound_2 {
//     margin - left: 4vw;
//     width: 92vw;
//     background - color: #ebe0e0;
//     border - radius: 30px;
//     position: absolute;
//     margin - top: 27vh;
//     box - shadow: 10px 0px 1px rgb(226, 199, 202);
// }

//   .blok_backgound_2_text2 {
//     font - size: 15px;
//     margin - top: 1vh;
//     width: 77vw;
// }

//   .blok_backgound_2_text1 {
//     margin - top: 1vh;
//     font - size: 15px;
//     border - bottom: 1px solid gray;








