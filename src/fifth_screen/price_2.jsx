import { Box } from "@mui/material";
export default function Price_2({ }) {
    return (

        <Box style={styles.container} >
            <Box>
                <p style={styles.textT} >ГУМАНИСТИЧЕСКИЙ ГИПНОЗ, АРТ-ТЕРАПИЯ до 1.30 мин, 5000 онлайн или 8000 очно  </p>
            </Box>
            <Box>
                <p style={styles.textB} > РАБОТА С:  группами, парами по запросу.
                            работаю со взрослыми, подростками от 15 лет </p>
            </Box>
        </Box>

    );
}

const styles = {
    container:{
        marginLeft: "60vw",
        backgroundColor: "#ebe0e0",
        borderRadius: "60px",
        position: "absolute",
        boxShadow: "13px 0px 0px rgb(227, 199, 202)"
    },
    textT:{
        marginTop: "1vh",
        fontSize: "26px",
        borderBottom: "1px solid gray",
        padding:'1em'
    },
    textB:{
        fontSize: "24px", marginTop: "1vh", width: "30vw", padding:'1em'
    }

}