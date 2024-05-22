import { Box } from "@mui/material";
export default function Choice_2({ }) {
    return (

        <Box style={styles.container} >
            <p className="sign" style={styles.text} >И это - Гуманистический гипноз, Арт-терапия и Эриксоновский коучинг –<br />
                <br />
                то, что меняет жизнь, меняет человека,
                помогает в поиске гармонии в себе и в этом мире, это те инструменты,
                которые работают и которые я хотела бы предложить Вам.</p>
        </Box>

    );
}

const styles = {
    text: {
        padding: "1em", marginTop: "1vh"
    },
    container:{
        position: "absolute",
        width: "66vw",
        backgroundColor: "#cbd5ca",
        marginLeft: "30vw",
        marginTop: "10vh",
        borderRadius: "20px",
        boxShadow: "6px 3px 4px gray",
        fontFamily: '"Jost", sans-serif',
        fontSize: "28px",
        zIndex: 1
    }
}