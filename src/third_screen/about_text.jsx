import { Box } from "@mui/material";
export default function About_text({  text }) {
    return (
        
            <Box style={styles.box} >
                <p className="text" style={styles.text} >{text}</p>
            </Box>
        
    );
}

const styles = {
    text: {
        fontSize: "26px",
        fontFamily: '"Jost", sans-serif',
        marginLeft: "3vw",
    },
    box: {
        marginLeft:"5vw",
        marginTop:"3vh"
    },
}