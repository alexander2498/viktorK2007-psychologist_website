import { useState } from "react";

export default function Forma() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');


    function sendFeedback(e) {
        e.preventDefault();
        const feedback = { name, phone, email, comment };
        
        fetch("http://localhost:3001/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedback),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                console.log("припиздярило");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div style={styles.backgroundForma} >
            <div style={styles.forma} >

                <div style={styles.flex_contact} className="flex_contact">
                    <div style={styles.how_to_contact} className="how_to_contact"><p>КАК СВЯЗАТЬСЯ</p></div>
                    <div style={styles.contact_text} className="contact_text"><p>КОНТАКТЫ</p></div>
                </div>

                <div className="info_flex" style={styles.infoFlex}>
                    <form onSubmit={sendFeedback} className="form_box" style={styles.form_box}>
                        <svg className="pismo" style={styles.pismo} width="24" height="18" viewBox="0 0 24 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.527344 5L11.9459 10.3333L23.3644 5M2.15856 1H21.7332C22.1658 1 22.5807 1.14048 22.8866 1.39052C23.1925 1.64057 23.3644 1.97971 23.3644 2.33333V15.6667C23.3644 16.0203 23.1925 16.3594 22.8866 16.6095C22.5807 16.8595 22.1658 17 21.7332 17H2.15856C1.72594 17 1.31103 16.8595 1.00512 16.6095C0.699204 16.3594 0.527344 16.0203 0.527344 15.6667V2.33333C0.527344 1.97971 0.699204 1.64057 1.00512 1.39052C1.31103 1.14048 1.72594 1 2.15856 1Z"
                                stroke="white" />
                        </svg>

                        <div style={styles.form_name}>
                            <input type="text" name="name" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="forma_box_flex" style={styles.forma_box_flex}>
                            <div className="form_phone" style={styles.form_phone}>
                                <input type="text" name="phone" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="form_email" style={styles.form_email}>
                                <input type="email" name="email" placeholder="Электронная почта" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="form_comment" style={styles.form_comment}>
                            <input type="text" name="comment" placeholder="Ваш комментарий" value={comment} onChange={(e) => setComment(e.target.value)} />
                        </div>
                        <button style={styles.button_zap} type="submit" className="button_zap">
                            <p style={styles.otpr} className="otpr">Отправить</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const styles = {
    backgroundForma: {
        backgroundColor: "#adbbdd",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        marginTop: "13vh"
    },
    forma: {
        boxShadow: "5px 5px 15px grey",
        backgroundColor: "#8ba7d3",
        width: "80vw",
        marginLeft: "10vw",
        borderRadius: "26px",
        marginTop: "24vh"
    },
    flex_contact: {
        display: "flex",
        justifyContent: "space-between"
    },
    how_to_contact: {
        fontFamily: '"Jost", sans-serif',
        fontSize: "50px",
        color: "white",
        marginLeft: "8vw",
        paddingTop: "4vh"
    },
    contact_text: {
        color: "white",
        marginRight: "10vw",
        paddingTop: "4vh",
        fontFamily: '"Jost", sans-serif',
        fontSize: "50px"
    },
    form_name: {

    },
    form_box: {
        width: "40vw", marginLeft: "4vw", paddingTop: "2vh"
    },
    button_zap: {
        marginLeft: "11vw",
        marginTop: "7vh",
        borderRadius: "27px",
        backgroundColor: "rgba(255, 255, 255, 0.31)",
        border: "none"
    },
    otpr: {
        fontSize: "26px",
        color: "white",
        fontFamily: '"Jost", sans-serif',
        padding: "0.5em"
    },
    forma_box_flex: {
        display: "flex",
        marginTop: "3vh"
    },
    form_box: {
        width: "40vw", marginLeft: "4vw", paddingTop: "2vh"
    },
    infoFlex: {
        display: "flex", height: "51vh"
    },
    info: {
        backgroundColor: "#9bb6e0",
        width: "22vw",
        height: "35vh",
        marginLeft: "6vw",
        marginTop: "3vh",
        borderRadius: "20px",
        border: "1px solid white"
    },
    form_name: {
        borderBottom: "white 2px solid",
        width: "36vw",
        marginLeft: "2vw",
        marginTop: "3vh"
    },
    form_phone: {
        borderBottom: "white 2px solid",
        marginLeft: "2vw",
        width: "17vw"
    },
    form_email: {
        borderBottom: "white 2px solid",
        marginLeft: "2vw",
        width: "17vw"
    },
    form_comment: {
        borderBottom: "white 2px solid",
        width: "36vw",
        marginLeft: "2vw",
        marginTop: "6vh"
    },
    pismo: {
        marginLeft: "36.5vw"
    }

};
