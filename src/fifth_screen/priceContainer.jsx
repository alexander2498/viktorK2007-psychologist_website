import { Box } from "@mui/material";
export default function PriceContainer({ textTop, textBottom, boxShadow, marginLeft}) {
    return (

        <Box boxShadow={boxShadow} style={styles.container} marginLeft={marginLeft} >
            <Box>
                <p style={styles.textTop} >{textTop}</p>
            </Box>
            <Box >
                <p style={styles.textBottom} >{textBottom}</p>
            </Box>
        </Box>

    );
}

const styles = {
    container:{
        backgroundColor: "#ebe0e0",
        borderRadius: "60px",
        position: "absolute",
    },
    textTop:{
        padding: "1em",
        fontSize: "26px",
        borderBottom: "1px solid gray",
        marginTop: "1vh",
        width: "26vw"
    },
    textBottom:{
        padding: "1em", fontSize: "26px", paddingBottom: "2em", width: "26vw"
    }

}
