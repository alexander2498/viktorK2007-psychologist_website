import { Box } from "@mui/material";
import PriceContainer from "./priceContainer";

export default function PriceBlock({ }) {
    return (
        <Box display={"flex"} styles={styles.container} >
            <PriceContainer marginLeft={"10vw"} boxShadow={"14px 0px 0px rgb(128, 160, 208)"} />
            <PriceContainer marginLeft={"20vw"} boxShadow={"14px 0px 0px rgb(227, 199, 202)"} />
        </Box>

    );
}

const styles = {
    // container: {
    //    display:"flex"
    // },
}