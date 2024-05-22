import { Box, Typography } from "@mui/material";

export default function Gipnoz({ text, marginTop, marginLeft, boxShadow }) {
    return (

        <Box style={styles.container} marginTop={marginTop} marginLeft={marginLeft} boxShadow={boxShadow} >
            <Typography className="text" style={styles.text} >{text}</Typography>
        </Box>

    );
}

const styles = {
    text: {
        fontSize: "26px",
        fontFamily: '"Jost", sans-serif',
        width: "74vw",
        padding: "1.5em",
        whiteSpace: "pre-wrap"
    },
    container: {
        backgroundColor: "#f4eeee",
        borderRadius: "69px",
    }
}
