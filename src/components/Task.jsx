import { useSortable } from "@dnd-kit/react/sortable";
import { KanbanContext } from "../context/KanbanContext.js";
import styles from "../styles/Task.module.css";

export default function Task({ id, index, columnId, taskObj }) {
    const { ref, isDragging } = useSortable({
        id,
        index,
        type: "item",
        accept: "item",
        group: columnId,
    });

    return (
        <button className="task" ref={ref} data-dragging={isDragging}>
            {taskObj.name}
        </button>
    );
}
