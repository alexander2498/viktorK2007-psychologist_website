import { Box } from "@mui/material";
import PriceContainer from "./priceContainer";

export default function PriceBlock({ }) {
    return (
        <Box display={"flex"} styles={styles.container} >
            
            <PriceContainer marginLeft={"60vw"} boxShadow={"14px 0px 0px rgb(227, 199, 202)"} textBottom={"РАБОТА С: группами, парами по запросу. работаю со взрослыми, подростками от 15 лет."} textTop={"ГУМАНИСТИЧЕСКИЙ ГИПНОЗ, АРТ-ТЕРАПИЯдо 1.30 мин, 5000 онлайн или 8000 очно"} />
            <PriceContainer marginLeft={"10vw"} boxShadow={"14px 0px 0px rgb(128, 160, 208)"} textBottom={"СЕССИЯ КОУЧИНГА 45 минут 4 000"} textTop={"СЕССИЯ ЗНАКОМСТВО 4 000, продолжительность 60 мин"} />
        </Box>

    );
}

const styles = {
    // container: {
    //    display:"flex"
    // },
}