const styles = {
    container: {
        backgroundColor: "#2b2c2c",
        width: "450px",
        marginTop: "2rem",
    },
    listInputBox: {
        display: "flex",
        justifyContent: "center",
    },
    listInput: {
        borderRadius: "0.3rem",
        border: "none",
        width: "100%",
        margin: "0.8rem",
        height: "20px"
    },
    divider: {
        backgroundColor: "#faa307",
        height: "0.13rem",
        margin: "0.7rem 0.8rem",
        borderRadius: "20px"
    },
    taskInput: {
        marginTop: "1rem",
        color: "rgba(255,255,255, 0.5)",
        backgroundColor: "inherit",
        border: "none",
        borderBottom: "1px solid #faa307",
        width: "85%"
    },
    checkbox: {
        marginTop: "0.3rem",
    },
    buttonBox: {
        display: "flex",
        justifyContent: "end",
    },
    addBtn: {
        marginRight: "0.8rem",
        height: "1.7rem",
        padding: "0 1.7rem",
        backgroundColor: "#faa307",
        "&:hover": {
            backgroundColor: "#fab610",
        }
    },
    cancelBtn: {
        marginRight: "1.3rem",
        height: "1.7rem",
        padding: "0 0.7rem",
    },
    buttonBox2: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem"
    },
    saveBtn: {
        marginRight: "0.8rem",
        backgroundColor: "#faa307",
        padding: "0.4rem 1.8rem ",
        marginBottom: "1rem",
        "&:hover": {
            backgroundColor: "#fab610",
        }
    },
    cancelBtn2: {
        color: "#faa307",
        textDecoration: "none",
        fontSize: "1.6rem",
        marginLeft: "3rem",
        "&:hover": {
            color: "#fab610",
        }
    }
};

export default styles;