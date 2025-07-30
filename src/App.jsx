import Titlebar from "./layout/Titlebar.jsx";
import Board from "./layout/Board.jsx";
import KanbanProvider from "./context/KanbanProvider.jsx";
import "./styles/global.css";

export default function App() {
    return (
        <KanbanProvider>
            <Titlebar />
            <Board />
        </KanbanProvider>
    );
}
