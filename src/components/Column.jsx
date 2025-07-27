import { useSortable } from "@dnd-kit/react/sortable";
import { CollisionPriority } from "@dnd-kit/abstract";

export default function Column({ children, id, index, columnObj }) {
    const { ref } = useSortable({
        id,
        index,
        type: "column",
        accept: ["item", "column"],
        collisionPriority: CollisionPriority.Low,
    });

    return (
        <>
            <div className="column" ref={ref}>
                <h2>{columnObj.name}</h2>
                {children}
            </div>
        </>
    );
}
