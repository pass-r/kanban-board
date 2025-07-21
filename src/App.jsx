import { useState, useRef } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import Column from "./components/Column.jsx";
import Item from "./components/Item.jsx";
import "./styles/styles.css";

export default function App() {
    const [items, setItems] = useState({
        A: ["item 1", "item 2", "item 3"],
        B: ["item 4", "item 5"],
        C: [],
    });

    const previousItems = useRef(items);
    const [columnOrder, setColumnsOrder] = useState(() => Object.keys(items));

    return (
        <DragDropProvider
            onDragStart={() => {
                previousItems.current = items;
            }}
            onDragOver={(event) => {
                const { source } = event.operation;

                if (source?.type === "column") return;

                setItems((items) => move(items, event));
            }}
            onDragEnd={(event) => {
                const { source } = event.operation;
                console.log(event);

                if (event.canceled) {
                    if (source.type === "item") {
                        setItems(previousItems.current);
                    }
                    return;
                }
                if (source.type === "columns") {
                    setColumnsOrder((columns) => move(columns, event));
                }
            }}
        >
            <div className="container">
                <div className="board-container">
                    {columnOrder.map((column, columnIndex) => (
                        <Column key={column} id={column} index={columnIndex}>
                            {items[column].map((id, index) => (
                                <Item key={id} id={id} index={index} column={column} />
                            ))}
                        </Column>
                    ))}
                </div>
            </div>
        </DragDropProvider>
    );
}
