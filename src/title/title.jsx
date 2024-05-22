import { Box, Container } from "@mui/material";

export default function Title() {
    return (
        <Box className="Title" style={styles.Container}>
            <p className="Title_text" style={styles.text} >ЖИТЬ - ЗНАЧИТ МЕДЛЕННО РОЖДАТЬСЯ</p>
        </Box>

    );
}
const styles = {
    text: {
        fontSize: "60px"
    },
    Container: {
        marginTop:"5vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
    },
}
