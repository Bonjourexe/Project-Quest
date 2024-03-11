import { useState } from "react";

export function QuestCreationForm({ addTask }) {
    const [title, setTitle] = useState("");
    const [currentKey, setCurrentKey] = useState(0);
    const defaultStepState = {
        description: "",
        status: "to-do",
        key: new Date().valueOf()
    };
    console.log()
    const [steps, setSteps] = useState([defaultStepState]);

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleStepDescriptionChange(index, value) {
        let stepsCopy = [...steps];
        stepsCopy[index].description = value;
        setSteps(stepsCopy);
    }

    function handleRemoveStepClick(i) {
        setSteps(steps.toSpliced(i, 1));
    }

    function handleAddStepClick() {
        setSteps([...steps, defaultStepState]);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        // alert(JSON.stringify({title, steps}));
        addTask({ title, steps });

        setTitle("");
        setSteps([defaultStepState])
    }

    return <>
        <p>Créer une nouvelle quête</p>
        <form className="quest-creation-form" onSubmit={handleFormSubmit}>
            <input type="text" value={title} onChange={handleTitleChange} placeholder="Titre de la quête" />
            {steps.map((s, i) => <div className="step-section" key={s.key}>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder={"Que faut-il faire ?"}
                    value={steps[i].description}
                    onChange={e => handleStepDescriptionChange(i, e.target.value)}
                    autoFocus
                    required>
                </textarea>
                <button onClick={() => handleRemoveStepClick(i)} disabled={steps.length < 2}>Retirer l'étape</button>
            </div>)}
            <button type="button" onClick={handleAddStepClick}>Ajouter une étape</button>
            <button type="submit">Confirmer</button>
        </form>
    </>;
}