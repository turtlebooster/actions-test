import { Route, Routes } from "react-router-dom";

// sample
import { Counter } from "./features/counter/Counter";

// page
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import Home from "./features/home/Home";

import styles from "./App.module.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      "Snow Duck World"
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="couter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
