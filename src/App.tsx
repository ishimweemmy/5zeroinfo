import { Route } from "react-router-dom";
import NavWrapper from "./components/global/NavWrapper";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="w-full h-screen bg-">
      <NavWrapper>
        <Route path="" element={<Dashboard />}></Route>
      </NavWrapper>
    </div>
  );
};

export default App;
