import { states } from "./dataStates";

export const optionStates = states.map((state) => ({
        label: state.name,
        value: state.abbreviation,
    })
)