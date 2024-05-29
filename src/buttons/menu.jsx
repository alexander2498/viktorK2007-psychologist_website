export default function TopButton({ button, backgroundColor, border, sign }) {
    return (
        <div >
            <header style={styles.header} class="header">
                <div style={styles.header__container} class="containerr header__container">
                    <button style={styles.header__burgerBtn} class="header__burgerBtn" id="burger">
                        <span style={styles.containerr}></span> <span style={styles.containerr}></span><span style={styles.containerr}></span>
                    </button>
                    <nav style={styles.containerr} class="menu">
                        <ul style={styles.containerr} class="menu__list">
                            <li style={styles.containerr} class="menu__item">
                                <a class="menu__link" href="#methods">
                                    <p style={styles.containerr} class="text_main"> О методах</p>
                                </a>
                            </li>
                            <li style={styles.containerr} class="menu__item">
                                <a class="menu__link" href="#seans">
                                    <p style={styles.containerr} class="text_main">О сеансах</p>
                                </a>
                            </li>
                            <li style={styles.containerr} class="menu__item">
                                <a class="menu__link" href="#educationA">
                                    <p style={styles.containerr} class="text_main">Об образовании</p>
                                </a>
                            </li>
                            <li style={styles.containerr} class="menu__item">
                                <a class="menu__link" href="#contacts">
                                    <p style={styles.containerr} class="text_main">Как связаться</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

const styles = {

    container: {
        display: 'flex',
        justifyContent: 'end',

    },
    menu__list: {
        display: "flex",
        alignItems: "center",
        listStyleType: "none",
        padding: "0",
        margin: "0"
    },
    "menu__item:not(:last-child)": { marginRight: "20px" },
    menu__link: { fontSize: "16px" },
    header: { boxShadow: "0px 4px 21px -1px rgba(34, 60, 80, )" },
    header__container: {
        display: ["flex", "none"],
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "10px",
        paddingBottom: "10px"
    },
    header__burgerBtn: {
        display: "none",
        position: "relative",
        width: "40px",
        height: "40px",
        border: "none",
        backgroundColor: "transparent",
        zIndex: 2
    },
    header__burgerBtnSpan: {
        position: "absolute",
        width: "30px",
        height: "3px",
        backgroundColor: "rgb(255, 255, 255)",
        left: "5px",
        transition: "transform .5s, opacity .5s, background-color .5s"
    },
    "header__burger-btn span:nth-child(1)": { transform: "translateY(-10px)" },
    "header__burger-btn span:nth-child(3)": { transform: "translateY(10px)" },
    "header.open .header__burger-btn span": { backgroundColor: "white" },
    "header.open .header__burger-btn span:nth-child(1)": {
        transform: "translateY(0) rotate(45deg)"
    },
    "header.open .header__burger-btn span:nth-child(2)": { opacity: 0 },
    "header.open .header__burger-btn span:nth-child(3)": {
        transform: "translateY(0) rotate(-45deg)"
    },
    containerr: { maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }

}