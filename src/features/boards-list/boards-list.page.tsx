import { CONFIG } from "@/shared/model/config";
import { ROUTES } from "@/shared/model/routes";
import { href, Link } from "react-router-dom";

function BoardsListPage() {

    return (
        <div>
            BoardListPage
            <h3>{CONFIG.API_BASE_URL}</h3>
            <Link to={href(ROUTES.BOARD, {boardId: "1"})}>BOARD 1</Link>
        </div>
    );
}

export const Component = BoardsListPage;