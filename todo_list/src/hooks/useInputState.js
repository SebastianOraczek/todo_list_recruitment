import { useState } from "react";

function useInputState(initialVal) {
    const [state, setState] = useState(initialVal);

    const handleChange = evt => {
        setState(evt.target.value)
    };

    return [state, handleChange];
};

export default useInputState;