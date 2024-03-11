import { useContext } from "react";
import { Task } from "./Task";
import { ProjectMethodsContext, TaskMethodsContext } from "../contexts";

export function Project({ project: { title, tasks }, projectIndex }) {
    const { updateProjectTitle, deleteProject } = useContext(ProjectMethodsContext);
    const { addTask } = useContext(TaskMethodsContext);
    return <main key={projectIndex}>
        <h2>
            <input
                type="text"
                value={title}
                onChange={(e) => updateProjectTitle(projectIndex, e.target.value)}
            />
            <button onClick={() => deleteProject(projectIndex)}>Supprimer la campagne</button>
        </h2>
        <button onClick={() => addTask(projectIndex, 'Nouvelle quête')}>Ajouter une quête</button>
        {tasks.map((task, taskIndex) => (
            <Task task={task} taskIndex={taskIndex} projectIndex={projectIndex} />
        ))}
    </main>;
}