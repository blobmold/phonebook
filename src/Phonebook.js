import { useState } from "react";
import PhonebookForm from "./components/PhonebookForm";
import PhonebookList from "./components/PhonebookList";
import PhonebookContext from "./context/PhonebookContext";
import React from 'react';


export default function Phonebook() {
    const [entries, setEntries] = useState(() => {
        // Default values will be the ones from localStorage if it exists
        const storedEntries = localStorage.getItem("phonebook");
        return storedEntries ? JSON.parse(storedEntries) : []
    });

    return (
        <PhonebookContext.Provider value={{ entries, setEntries }}>
            <PhonebookForm></PhonebookForm>
            <PhonebookList></PhonebookList>
        </PhonebookContext.Provider>
    );
}
