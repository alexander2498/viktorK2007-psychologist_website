import ButtonSign from "./buttonSign";
export default function TopButton(padding, marginLeft,  opacity, fontSize, paddingBottom, justifyContent, paddingTop) {
    return (
        <ButtonSign padding={padding}
            marginLeft={marginLeft}
            opacity={opacity}
            fontSize={fontSize}
            paddingBottom={paddingBottom}
            justifyContent={justifyContent}
            paddingTop={paddingTop}
        />

    );
}

// const buttonTop = {
//     text: {
//         color: "white",
//         opacity: 1,
//         fontSize: "20px",
//         paddingBottom: "0.1em",
//         fontFamily: '"Jost", sans-serif'
//     },
//     container: {
//         display: 'flex',
//         justifyContent: 'end',
//         paddingTop: '6vw'
//     },
//     button: {
//         marginLeft: "2%",
//         borderRadius: "50px",
//         backgroundColor: "rgb(253, 226, 205, 0.7)",
//         padding: "0.22em",
//     },
// }
