import { Outlet } from "react-router-dom";
import Sidebar from "./components/core/Sidebar";

function App() {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
