import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

import coursesData from "./data/courses";

function App() {

    const [courses] = useState(coursesData);

    const [searchTerm, setSearchTerm] = useState("");

    const [enrolledCourses, setEnrolledCourses] = useState([]);

    function handleEnroll(id) {

        if (!enrolledCourses.includes(id)) {

            setEnrolledCourses([

                ...enrolledCourses,

                id

            ]);

        }

    }

    const filteredCourses = courses.filter(course =>

        course.name

            .toLowerCase()

            .includes(searchTerm.toLowerCase())

    );

    return (

        <>

            <Header

                siteName="Student Portal"

                enrolledCount={enrolledCourses.length}

            />

            <main className="container">

                <input

                    type="text"

                    placeholder="Search Courses..."

                    className="search-box"

                    value={searchTerm}

                    onChange={(event) =>

                        setSearchTerm(event.target.value)

                    }

                />

                <div className="course-grid">

                    {

                        filteredCourses.map(course => (

                            <CourseCard

                                key={course.id}

                                {...course}

                                onEnroll={handleEnroll}

                            />

                        ))

                    }

                </div>

            </main>

            <Footer />

        </>

    );

}

export default App;