import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

function App() {

  return (

    <>

      <Header siteName="Student Portal" />

      <main className="container">

        <CourseCard

          name="Data Structures"

          code="CS101"

          credits={4}

          grade="A"

        />

      </main>

      <Footer />

    </>

  );

}

export default App;