import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App({isLoggedIn, setIsLoggedIn}) {
  return (
    <div className="application bg-slate-950">
      
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Outlet />
    </div>
  );
}

export default App;
