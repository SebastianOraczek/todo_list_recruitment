const styles = {
    container: {
        backgroundColor: "inherit",
        width: "800px",
        border: "none",
        boxShadow: "none",
    },
    addBtnBox: {
        position: "fixed",
        right: "26rem",
        bottom: "2rem",
    },
    addBtn: {
        color: "white",
        fontSize: "4rem",
        backgroundColor: "#faa307",
        borderRadius: "50%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
            transform: "scale(1.2)"
        }
    },
    inputsAbove: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem"
    },
    sortBtn: {
        backgroundColor: "white",
        padding: "0.3rem 2rem",
        marginRight: "1rem",
        borderRadius: "8px",
    },
    searchInput: {
        backgroundColor: "white",
        borderRadius: "8px",
        paddingLeft: "0.5rem",
        border: "none",
        outline: "none",
        marginLeft: "1rem",
        transition: "all 0.3s ease-in-out",
        width: "20%",
        "&:focus": {
            width: "30%"
        },
        "&:hover": {
            width: "30%"
        }
    }
};

export default styles;