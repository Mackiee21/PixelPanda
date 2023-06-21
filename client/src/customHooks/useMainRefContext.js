import { useContext } from "react";
import { MainRefContext } from "../App";

function useMainRefContext() {
    return useContext(MainRefContext);
}

export default useMainRefContext;