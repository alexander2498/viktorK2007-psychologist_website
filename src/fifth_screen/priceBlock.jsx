import { Box } from "@mui/material";
import PriceContainer from "./priceContainer";
import styled from "styled-components";

export default function PriceBlock({ }) {
    return (
        // <Box display={"flex"} styles={styles.container} >

        //     <PriceContainer marginLeft={"60vw"} boxShadow={"14px 0px 0px rgb(227, 199, 202)"} textBottom={"РАБОТА С: группами, парами по запросу. работаю со взрослыми, подростками от 15 лет."} textTop={"ГУМАНИСТИЧЕСКИЙ ГИПНОЗ, АРТ-ТЕРАПИЯдо 1.30 мин, 5000 онлайн или 8000 очно"} />
        //     <PriceContainer marginLeft={"10vw"} boxShadow={"14px 0px 0px rgb(128, 160, 208)"} textBottom={"СЕССИЯ КОУЧИНГА 45 минут 4 000"} textTop={"СЕССИЯ ЗНАКОМСТВО 4 000, продолжительность 60 мин"} />
        // </Box>

       
            <blok_flex >
                <blok_1 >
                    <blok_backgound_1 >
                        <blok_backgound_1_text1 >
                            <price_2 > СЕССИЯ ЗНАКОМСТВО 4 000, продолжительность 60 мин</price_2>
                        </blok_backgound_1_text1>
                        <blok_backgound_1_text2 >
                            <price_2 > СЕССИЯ КОУЧИНГА 45 минут 4 000</price_2>
                        </blok_backgound_1_text2 >

                        <V_line ></V_line>
                        <blok_2 >
                            
                                <blok_backgound_2 >
                                    <blok_backgound_2_text1 >
                                        <price_1 > ГУМАНИСТИЧЕСКИЙ ГИПНОЗ, АРТ-ТЕРАПИЯдо 1.30 мин, 5000 онлайн или 8000 очно
                                        </price_1>
                                    </blok_backgound_2_text1>
                                    <blok_backgound_2_text2 >
                                        <price_1 >
                                            РАБОТА С: группами, парами по запросу. работаю со взрослыми, подростками от 15 лет.</price_1 >

                                    </blok_backgound_2_text2 >
                                </blok_backgound_2 >
                          
                        </blok_2 >
                    </blok_backgound_1>
                </blok_1>
            </blok_flex>
       

    );
}

const blok_flex = styled.div`
    display: flex;
`;
const price_2 = styled.p`
     width: 26vw;
`;
const blok_1 = styled.div`
    position: relative;
`;
const blok_backgound_1 = styled.div`
     background-color: #ebe0e0;
    border-radius: 60px;
    position: absolute;
    margin-left: 10vw;
    box-shadow: 14px 0px 0px rgb(128, 160, 208);
`;const blok_backgound_1_text1 = styled.div`
    padding: 1em;
    font-size: 26px;
    padding-bottom: 2em;
`;const blok_backgound_1_text2 = styled.div`
     padding: 1em;
    font-size: 26px;
    border-bottom: 1px solid gray;
    margin-top: 1vh;
`;const V_line = styled.div`
     position: absolute;
  height: 34vh;
  border-right: 1px solid;
  margin-left: 50.4vw;
  margin-top: 3vh;
`;const blok_2 = styled.div`
    position: relative;
`;const blok_backgound_2 = styled.div`
    margin-left: 60vw;
    background-color: #ebe0e0;
    border-radius: 60px;
    position: absolute;
    box-shadow: 13px 0px 0px rgb(227, 199, 202);
`;
const blok_backgound_2_text1 = styled.div`
     margin-top: 1vh;
    font-size: 26px;
    border-bottom: 1px solid gray
`;
const blok_backgound_2_text2 = styled.div`
    font-size: 24px;
    margin-top: 1vh;
    width: 30vw;
`;
const price_1 = styled.p`
padding: 1em;
`;
