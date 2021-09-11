const styles = {
    container: {
        backgroundColor: "#2b2c2c",
        width: "400px",
        marginTop: "2rem",
    },
    text: {
        color: "#faa307",
        fontSize: "30px",
        fontWeight: "700",
        letterSpacing: "1px",
        margin: "0 0 3rem 0",
        display: "flex",
        justifyContent: "center"
    },
    inputBox: {
        display: "flex",
        justifyContent: "center",
    },
    input: {
        borderRadius: "0.3rem",
        border: "none",
        width: "100%",
        margin: "0.5rem 3rem",
        height: "20px"
    },
    buttonBox: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "3.5rem",
    },
    button: {
        backgroundColor: "#faa307",
        color: "white",
        margin: "1.5rem 0",
        width: "7.5rem",
        "&:hover": {
            backgroundColor: "#fab610",
        }
    },
    arrow: {
        color: "white",
        marginTop: "0.3rem",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            transform: "translateX(3px)",
        }
    }
};

export default styles;