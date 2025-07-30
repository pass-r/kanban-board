import { useContext } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import Column from "../components/Column.jsx";
import Task from "../components/Task.jsx";
import { KanbanContext } from "../context/KanbanContext.js";
import styles from "../styles/Board.module.css";

export default function Board() {
    const {
        boardPositions,
        setBoardPositions,
        columnsOrder,
        setColumnsOrder,
        previousBoardPositions,
        columns,
        tasks,
    } = useContext(KanbanContext);

    return (
        <DragDropProvider
            onDragStart={() => {
                previousBoardPositions.current = boardPositions;
            }}
            onDragOver={(event) => {
                const { source } = event.operation;

                if (source?.type === "column") return;
                setBoardPositions((board) => move(board, event));
            }}
            onDragEnd={(event) => {
                const { source } = event.operation;

                if (event.canceled) {
                    if (source.type === "item")
                        setBoardPositions(previousBoardPositions.current);
                    return;
                }
                if (source.type === "columns") {
                    setColumnsOrder((columns) => move(columns, event));
                }
            }}
        >
            <main className="main">
                <div className="board-container">
                    {columnsOrder.map((columnId, columnIndex) => (
                        <Column
                            key={columnId}
                            id={columnId}
                            index={columnIndex}
                            columnObj={columns[columnId]}
                        >
                            {boardPositions[columnId].map((taskId, index) => (
                                <Task
                                    key={taskId}
                                    id={taskId}
                                    index={index}
                                    columnId={columnId}
                                    taskObj={tasks[taskId]}
                                />
                            ))}
                        </Column>
                    ))}
                </div>
            </main>
        </DragDropProvider>
    );
}
