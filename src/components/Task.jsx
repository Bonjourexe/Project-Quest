import { useContext } from "react";
import { StepMethodsContext, TaskMethodsContext } from "../contexts";

export function Task({ task: { title, steps }, taskIndex, projectIndex }) {
    const { addTask, updateTaskTitle, deleteTask } = useContext(TaskMethodsContext);
    const { addStep, updateStepDescription, updateStepStatus, deleteStep } = useContext(StepMethodsContext);
    return <div className="task" key={taskIndex}>
        <h3>
            <input
                type="text"
                value={title}
                onChange={(e) => updateTaskTitle(projectIndex, taskIndex, e.target.value)}
            />
            <button onClick={() => deleteTask(projectIndex, taskIndex)}>Supprimer la quête</button>
        </h3>
        <button onClick={() => addStep(projectIndex, taskIndex, 'Nouvelle étape')}>Ajouter une étape</button>
        { steps.map((step, stepIndex) => (
            <p key={stepIndex}>
                <textarea
                    type="text"
                    value={step.description}
                    onChange={(e) => updateStepDescription(projectIndex, taskIndex, stepIndex, e.target.value)}
                />
                <select value={step.status} onChange={(e) => updateStepStatus(projectIndex, taskIndex, stepIndex, e.target.value)}>
                    <option value="à faire">à faire</option>
                    <option value="en cours">en cours</option>
                    <option value="fait">fait</option>
                </select>
                <button onClick={() => deleteStep(projectIndex, taskIndex, stepIndex)}>Supprimer l'étape</button>
            </p>
        ))}
    </div>;
}