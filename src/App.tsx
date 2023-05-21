import { Outlet } from "react-router-dom";
import ResetCSS from "./resetcss";

function App() {
  return (
    <>
      <ResetCSS />
      <Outlet />
    </>
  );
}

export default App;
