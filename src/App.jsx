import Titlebar from "./layout/Titlebar.jsx";
import Board from "./layout/Board.jsx";
import KanbanProvider from "./context/KanbanProvider.jsx";
import "./styles/styles.css";

export default function App() {
    return (
        <KanbanProvider>
            <Titlebar />
            <div className="container">
                <Board />
            </div>
        </KanbanProvider>
    );
}
