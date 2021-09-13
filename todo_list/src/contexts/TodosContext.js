import { createContext } from "react";

import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";

export const LoginContext = createContext();
export const RegisterContext = createContext();

export function TodosProvider(props) {

    // Stany dla komponentu Login
    const [identifier, setIdentifier, resetIdentifier] = useInputState("");
    const [password, setPassword, resetPassword] = useInputState("");
    const [isAlert, toggle] = useToggleState(false);

    // Stany dla komponentu Register
    const [username, changeUsername] = useInputState("");
    const [email, changeEmail] = useInputState("");
    const [passwordRegister, changePasswordRegister] = useInputState("");
    const [repPassword, changeRepPassword] = useInputState("");
    const [isAlertRegister, toggleAlertRegister] = useToggleState(false);

    return (
        <LoginContext.Provider value={{
            identifier, setIdentifier, resetIdentifier,
            password, setPassword, resetPassword, isAlert, toggle,
        }}>
            <RegisterContext.Provider value={{
                username, changeUsername,
                email, changeEmail,
                passwordRegister, changePasswordRegister,
                repPassword, changeRepPassword,
                isAlertRegister, toggleAlertRegister
            }}>
                {props.children}
            </RegisterContext.Provider>
        </LoginContext.Provider>
    );
};