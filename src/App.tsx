import { Route } from "react-router-dom";
import NavWrapper from "./components/global/NavWrapper";
import Dashboard from "./components/Dashboard";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div className="w-full h-screen bg-">
      <NavWrapper>
        <Route path="" element={<Landing />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </NavWrapper>
    </div>
  );
};

export default App;
