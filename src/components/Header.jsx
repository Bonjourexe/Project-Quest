export function Header({projectName}) {
    const projectNameLabel = projectName? <h2>{projectName}</h2> : null;
    // projectName && alert(projectName);
    return <header>
        <h1>Project Quest</h1>
        {projectNameLabel}
    </header>
}