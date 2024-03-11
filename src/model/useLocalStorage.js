import { useEffect, useState } from "react";

const keyName = 'pq-projects-data';
export const useLocalStorage = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem(keyName));
        if (storedProjects) {
            setProjects(storedProjects);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (isLoading) return;

        localStorage.setItem(keyName, JSON.stringify(projects));
    }, [projects]);

    const addProject = (title) => {
        setProjects([...projects, { title, tasks: [] }]);
    };

    const addTask = (projectIndex, taskTitle) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].tasks.push({ title: taskTitle, steps: [] });
        setProjects(updatedProjects);
    };

    const addStep = (projectIndex, taskIndex, stepDescription) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].tasks[taskIndex].steps.push({ description: stepDescription, status: 'à faire' });
        setProjects(updatedProjects);
    };

    const updateProjectTitle = (projectIndex, newTitle) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].title = newTitle;
        setProjects(updatedProjects);
    };

    const updateTaskTitle = (projectIndex, taskIndex, newTitle) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].tasks[taskIndex].title = newTitle;
        setProjects(updatedProjects);
    };

    const updateStepDescription = (projectIndex, taskIndex, stepIndex, newDescription) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].tasks[taskIndex].steps[stepIndex].description = newDescription;
        setProjects(updatedProjects);
    };

    const updateStepStatus = (projectIndex, taskIndex, stepIndex, newStatus) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].tasks[taskIndex].steps[stepIndex].status = newStatus;
        setProjects(updatedProjects);
    };

    const deleteProject = (projectIndex) => {
        const updatedProjects = [...projects];
        updatedProjects.splice(projectIndex, 1);
        setProjects(updatedProjects);
    };

    const deleteTask = (projectIndex, taskIndex) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].tasks.splice(taskIndex, 1);
        setProjects(updatedProjects);
    };

    const deleteStep = (projectIndex, taskIndex, stepIndex) => {
        const updatedProjects = [...projects];
        updatedProjects[projectIndex].tasks[taskIndex].steps.splice(stepIndex, 1);
        setProjects(updatedProjects);
    };

    return {
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
    }
}