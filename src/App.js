import React, { useState, useEffect } from 'react';
import { Project } from './components/Project';
import { useLocalStorage } from './model/useLocalStorage';
import { Header } from './components/Header';
import { ProjectPicker } from './components/ProjectPicker';
import "./App.css";
import { ProjectMethodsContext, StepMethodsContext, TaskMethodsContext } from './contexts';
import lang from "./lang/fr.json";

function App() {
    const [mode, setMode] = useState("RPG");
    const {
        addProject,
        addTask,
        addStep,
        updateProjectTitle,
        updateTaskTitle,
        updateStepDescription,
        updateStepStatus,
        deleteProject,
        deleteTask,
        deleteStep,
        projects
    } = useLocalStorage();
    const [openedProject, setOpenedProject] = useState(null);

    function openProject(index) {
        setOpenedProject({
            project: projects[index],
            projectIndex: index
        });
    }

    console.table(projects);
    console.table(projects.map(p => p.title));
    return (
        <ProjectMethodsContext.Provider value={{ addProject, updateProjectTitle, deleteProject }}>
            <TaskMethodsContext.Provider value={{ addTask, updateTaskTitle, deleteTask }}>
                <StepMethodsContext.Provider value={{ addStep, updateStepDescription, updateStepStatus, deleteStep }}>
                    <div className='App'>
                        <Header projectName={openedProject?.project.title} />
                        <div>
                            <ProjectPicker projects={projects.map(p => p.title)} handleProjectClick={openProject} addProject={addProject} />
                            {openedProject ?
                                <Project project={openedProject.project} projectIndex={openedProject.projectIndex} />
                                : null
                            }
                        </div>
                    </div>
                </StepMethodsContext.Provider>
            </TaskMethodsContext.Provider>
        </ProjectMethodsContext.Provider>
    );
}

export default App;