import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ProfilePage from "./pages/ProfilePage";

import "./App.css";

function App() {

  return (

    <>

      <Header />

      <Routes>

        <Route

          path="/"

          element={<HomePage />}

        />

        <Route

          path="/courses"

          element={<CoursesPage />}

        />

        <Route

          path="/profile"

          element={<ProfilePage />}

        />

      </Routes>

    </>

  );

}

export default App;