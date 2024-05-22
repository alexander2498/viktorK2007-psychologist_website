

export default function Wefy_sText() {
    return (
        <div className="conteiner_Text_title" style={styles.style} >

            <p className="Text_title" style={styles.text} >(как проходит сеанс)</p>

        </div>
    );
}

const styles = {
    style: {
        fontFamily: '"Bad Script", cursive', fontSize: "26px",
        with:"10vw",
        hight:"10vh"
    },
    text:{
        marginTop:"2vh"
    }
}