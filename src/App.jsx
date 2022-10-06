import "./App.scss";
import HomePage from "./components/pages/HomePage";
import ShoppingList from "./components/pages/ShoppingList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <ShoppingList /> */}
    </div>
  );
}

export default App;
