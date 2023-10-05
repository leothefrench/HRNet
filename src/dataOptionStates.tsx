import { states } from "./dataStates";

export const optionStates = states.map((state) => ({
        value: state.name,
        label: state.name,
    })
)