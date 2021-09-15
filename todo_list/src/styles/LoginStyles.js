const styles = {
    container: {
        backgroundColor: "#2b2c2c",
        width: "400px",
        marginTop: "2rem",
    },
    login: {
        color: "#faa307",
        fontSize: "30px",
        fontWeight: "700",
        letterSpacing: "1px",
        margin: "2rem 0 4rem 0",
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
        height: "20px",
        outline: "none"
    },
    buttonBox: {
        display: "flex",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#faa307",
        color: "white",
        margin: "1.5rem 0",
        width: "7rem",
        "&:hover": {
            backgroundColor: "#fab610",
        }
    },
    span: {
        color: "white",
        display: "flex",
        justifyContent: "center",
        fontSize: "15px",
        marginBottom: "1.6rem"
    },
    linkBox: {
        display: "flex",
        justifyContent: "center",
    },
    link: {
        marginBottom: "4rem",
        textDecoration: "none",
        color: "#faa307",
        fontSize: "17px",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            color: "#fab640",
            transform: "translateY(-4px)"
        }
    }
};

export default styles;