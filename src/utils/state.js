import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    open: false,
    message: "",
    type: "error",
    auth: [],
    dev: false,
    flagGenitore: false,
});

export { setGlobalState, useGlobalState };