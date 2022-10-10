import React, { useContext } from "react";
import PhonebookContext from "../context/PhonebookContext";


export default function PhonebookList() {
    const { entries, setEntries } = useContext(PhonebookContext);

    const handleDelete = (index) => {
        entries.splice(index, 1);
        localStorage.setItem("phonebook", JSON.stringify(entries));
        setEntries([...entries]);
    };

    const entryElements = entries.map((entry, index) => (
        <tr key={index}>
            <td>{entry.name}</td>
            <td>{entry.phoneNumber}</td>
            <td onClick={(e) => handleDelete(index)} style={{ cursor: "pointer" }}>
                Delete
            </td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>{entryElements}</tbody>
        </table>
    );
}
