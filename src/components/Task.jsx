import { useSortable } from "@dnd-kit/react/sortable";
import { KanbanContext } from "../context/KanbanContext.js";

export default function Task({ id, index, columnId, taskObj }) {
    const { ref, isDragging } = useSortable({
        id,
        index,
        type: "item",
        accept: "item",
        group: columnId,
    });

    return (
        <button className="item" ref={ref} data-dragging={isDragging}>
            {taskObj.name}
        </button>
    );
}
