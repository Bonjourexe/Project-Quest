import { useState } from "react";

export function ProjectCreationForm({ addProject }) {
    const [name, setName] = useState("");
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name) return;

        addProject(name);

        setName("");
    }
    return <form onSubmit={handleFormSubmit}>
        <input type="text" name="project-name" value={name} onChange={handleNameChange} placeholder="Nom de la campagne" required />
        <button type="submit">Confirmer</button>
    </form>;
}