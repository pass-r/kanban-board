import { useState, useRef } from "react";

import { KanbanContext } from "./KanbanContext.js";

export default function KanbanProvider({ children }) {
    const [boardPositions, setBoardPositions] = useState({
        cq4hiFrYmXmq6cwRJM8jP0: [
            "tGI8JC_ZYhCkFYGd7CHmsr",
            "t1g3GHB6alRP4wd8wFiBRk",
            "tTKgnsxz9cfaPdtx6FEtwH",
        ],
        c_oWAzZWamksTckPWeunAD: ["thPDqHrDU97_aox0yWxKx2", "tQ8GJZC3Ak9u8QhXM2mmQB"],
        "cptoB1BhaIjj-awC1IwD5X": [],
    });

    const [columns, setColumns] = useState({
        cq4hiFrYmXmq6cwRJM8jP0: { id: "cq4hiFrYmXmq6cwRJM8jP0", name: "Column 1" },
        c_oWAzZWamksTckPWeunAD: { id: "c_oWAzZWamksTckPWeunAD", name: "Column 2" },
        "cptoB1BhaIjj-awC1IwD5X": { id: "cptoB1BhaIjj-awC1IwD5X", name: "Column 3" },
    });

    const [tasks, setTasks] = useState({
        tGI8JC_ZYhCkFYGd7CHmsr: { id: "tGI8JC_ZYhCkFYGd7CHmsr", name: "Task1" },
        t1g3GHB6alRP4wd8wFiBRk: { id: "t1g3GHB6alRP4wd8wFiBRk", name: "Task2" },
        tTKgnsxz9cfaPdtx6FEtwH: { id: "tTKgnsxz9cfaPdtx6FEtwH", name: "Task3" },
        thPDqHrDU97_aox0yWxKx2: { id: "thPDqHrDU97_aox0yWxKx2", name: "Task4" },
        tQ8GJZC3Ak9u8QhXM2mmQB: { id: "tQ8GJZC3Ak9u8QhXM2mmQB", name: "Task5" },
    });
    const [columnsOrder, setColumnsOrder] = useState(() => Object.keys(boardPositions));

    const previousBoardPositions = useRef(boardPositions);

    return (
        <KanbanContext
            value={{
                boardPositions,
                setBoardPositions,
                columns,
                setColumns,
                tasks,
                setTasks,
                columnsOrder,
                setColumnsOrder,
                previousBoardPositions,
            }}
        >
            {children}
        </KanbanContext>
    );
}
