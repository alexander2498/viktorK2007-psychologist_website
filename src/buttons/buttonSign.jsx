import { Box } from "@mui/material"
// import { useState } from "react";
const styles = {
    button: {
        borderRadius: '50px',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '6vw'
    },
    text: {
        paddingTop: '0.2em',
        paddingLeft: '1.7em',
        paddingRight: '1.7em',
        paddingBottom: '0.29em',
        fontSize: '36px',
        color: 'white',
        fontFamily: "Jost, sans-serif",
    },
}



export default function ButtonSign({ sign, backgroundColor, border, }) {
    // const [styles, setStyle] = useState({ variant });
   
    // console.log(variant)


    return (
        <div style={styles.container} >
            <Box style={styles.button} border={border} backgroundColor={backgroundColor}>
                <p className="sign" style={styles.text} >{sign}</p>
            </Box>
        </div>
    );
}



