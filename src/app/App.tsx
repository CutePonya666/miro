import { AppHeader } from "@/features/header";
import { ROUTES } from "@/shared/model/routes";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isAuthPage = ROUTES.REGISTER === location.pathname || ROUTES.LOGIN === location.pathname;
  console.log(isAuthPage)
  return (
    <div className="bg-gray-100">
      {!isAuthPage && <AppHeader />}
      <Outlet />
    </div>
  );
}

export default App;
