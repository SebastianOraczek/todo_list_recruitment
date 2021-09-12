export const getUser = () => {
    window.localStorage.getItem("user");
};

export const deleteUser = () => {
    window.localStorage.setItem("user", "")
};