import { Box } from "@mui/material";
export default function TopButton({ button, backgroundColor, border, sign }) {
    return (
        <div style={styles.container} >
            <Box style={styles.button} >
                <p className="sign" style={styles.text} >{sign}</p>
            </Box>
        </div>
    );
}

const styles = {
    text: {
        color: "white",
        opacity: 1,
        fontSize: "26px",

        fontFamily: '"Jost", sans-serif'
    },
    container: {
        display: 'flex',
        justifyContent: 'end',

    },
    button: {
        marginLeft: "2vw",
        borderRadius: "50px",
        backgroundColor: "rgb(253, 226, 205, 0.7)",
        padding: "0.3em",
    },
}
