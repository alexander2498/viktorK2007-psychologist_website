export default function Year_line({ }) {
    return (





        <svg class="year_line" style={styles.style} width="11" height="362" viewBox="0 0 11 362" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="6.25" x2="6.25" y2="362" stroke="black" stroke-width="0.5" />
            <circle cx="5.5" cy="314.5" r="5.5" fill="#B6DBB0" />
            <circle cx="5.5" cy="204.5" r="5.5" fill="#8B9CC8" />
            <circle cx="5.5" cy="5.5" r="5.5" fill="black" />
            <circle cx="5.5" cy="131.5" r="5.5" fill="#E2B6B6" />
        </svg>
    );
}

const styles = {
    style: {
        marginTop: "0.4vh",
        marginLeft: "4vw",
        height: "44vh",
        width: "0.78vw"
    }
}
