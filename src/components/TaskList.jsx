import { QuestCreationForm } from "./QuestCreationForm";
import { Task } from "./Task";

export function TaskList({tasks, addTask}) {
    if (!tasks) {
        return <main>
            <div className="task">
                <h2>Il n'y a encore rien ici, aventurier.</h2>
                <p>Crée une quête pour commencer une nouvelle aventure !</p>
                <QuestCreationForm addTask={addTask} />
            </div>
        </main>;
    }
    return <main>
        {tasks.map(t => <Task title={t.title} steps={t.steps} />)}
        {/* <button>Ajouter une quête</button> */}
        <div className="task">
            <QuestCreationForm addTask={addTask} />
        </div>
    </main>;
}









// export function TaskList({tasks}) {
//     return <main>
//         <div className="category">
//             <div className="category-label">Bdd</div>
//             <Task/>
//             <Task/>
//             <Task/>
//         </div>
//         <div className="category">
//             <div className="category-label">Backend</div>
//             <Task/>
//             <Task/>
//         </div>
//         <div className="category">
//             <div className="category-label">Frontend</div>
//             <Task/>
//         </div>
//         <div className="category">
//             <div className="category-label">Débogage</div>
//             <Task/>
//             <Task/>
//             <Task/>
//             <Task/>
//         </div>
//         <div className="category">
//             <div className="category-label">Documentation</div>
//             <Task/>
//             <Task/>
//             <Task/>
//         </div>
//     </main>
// }