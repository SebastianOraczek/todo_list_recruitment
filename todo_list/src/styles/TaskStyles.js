const styles = function styles(theme) {
    return {
        box: {
            height: "60px",
            width: "520px",
            marginTop: "-0.8rem"
        },
        taskInput: {
            marginTop: "0.3rem",
            color: "rgba(255,255,255, 0.8)",
            backgroundColor: "inherit",
            border: "none",
            borderBottom: "1px solid #faa307",
            width: "100%",
        },
        checkbox: {
            margin: "0.3rem 0 0 -1rem",
            '&$checked': {
                color: "green"
            }
        }
    }
};

export default styles;