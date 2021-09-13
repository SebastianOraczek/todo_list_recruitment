export const getUser = (user) => {
    window.localStorage.getItem("user", user);
};

export const deleteUser = () => {
    window.localStorage.setItem("user", "")
};