const styles = {
    container: {
        display: "flex",
        textDecoration: "none",
        color: "white",
        margin: "1rem",
        backgroundColor: "#2b2c2c",
        borderRadius: "8px",
        transition: "all 0.2s ease-is-out",
        "&:hover": {
            backgroundColor: "#333533"
        }
    },
    item: {
        height: "64px",
    },
    name: {
        marginRight: "2rem",
        width: "2rem",
        fontFamily: "Ubuntu",
        fontWeight: 300,
        display: "flex",
        justifyContent: "start",
    },
    create: {
        fontFamily: "Ubuntu",
        color: "rgba(255, 255, 255, 0.7)",
        display: "flex",
        justifyContent: "end",
    },
    complete: {
        fontFamily: "Ubuntu",
        color: "rgba(255, 255, 255, 0.7)",
        marginLeft: "1rem",
        display: "flex",
        justifyContent: "end",
    }
};

export default styles;