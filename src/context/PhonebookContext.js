import { createContext } from "react";

const PhonebookContext = createContext({
    entries: [],
    setEntries: () => null
})

export default PhonebookContext;