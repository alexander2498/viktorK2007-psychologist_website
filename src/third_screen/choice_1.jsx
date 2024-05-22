import { Box } from "@mui/material";
export default function Choice_1({ }) {
    return (

        <Box style={styles.container} >
            <p className="sign" style={styles.text} >у вас есть ВЫБОР как это сделать!</p>
        </Box>

    );
}

const styles = {
    text: {
        marginTop: "1vh",
        marginLeft: "5vh",
        padding: "0.2em"
    },
    container:{
        position: "absolute",
        width: "38vw",
        zIndex: 2,
        backgroundColor: "#ebe1e1",
        borderRadius: "20px",
        marginLeft: "4vw",
        marginTop: "4vh",
        boxShadow: "6px 3px 4px gray",
        fontSize: "30px",
        fontFamily: '"Jost", sans-serif'
    }
}