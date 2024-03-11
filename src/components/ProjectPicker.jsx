import { ProjectCreationForm } from "./ProjectCreationForm";

export function ProjectPicker({projects, handleProjectClick, addProject}) {
    console.log(projects);
    return <nav>
        <ul>
            {projects.map((p, i) => <li onClick={() => handleProjectClick(i)}>{p}</li>)}
        </ul>
        <ProjectCreationForm addProject={addProject} />
    </nav>
}