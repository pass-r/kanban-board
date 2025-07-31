import { useContext } from "react";
import { KanbanContext } from "../context/KanbanContext.js";
import styles from "../styles/Titlebar.module.css";

export default function Titlebar() {
    const { boardName, setBoardName } = useContext(KanbanContext);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1>Kanban</h1>
                <div>{boardName}</div>
            </div>
        </header>
    );
}
