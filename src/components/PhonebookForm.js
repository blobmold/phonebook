import React, { useContext } from "react";
import PhonebookContext from "../context/PhonebookContext";

export default function PhonebookForm() {
    const { entries, setEntries } = useContext(PhonebookContext);

    const handleForm = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phoneNumber = e.target.phoneNumber.value;
        const newEntry = { name, phoneNumber };
        const updatedEntries = [...entries, newEntry];

        localStorage.setItem("phonebook", JSON.stringify(updatedEntries));
        setEntries(updatedEntries);

    };

    return (
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="name">Name</label>
                <input type={"text"} id="name" name="name"></input>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type={"number"} id="phoneNumber" name="phoneNumber"></input>
            </div>
            <input type={"submit"} value="Add to Phonebook"></input>
        </form>
    );
}
