import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";

function App() {

    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchCourses() {

            try {

                const response = await fetch(

                    "https://jsonplaceholder.typicode.com/posts"

                );

                if (!response.ok) {

                    throw new Error("Failed to fetch courses");

                }

                const data = await response.json();

                const courseData = data.slice(0, 5).map(post => ({

                    id: post.id,

                    title: post.title,

                    code: `CS10${post.id}`,

                    credits: 3 + (post.id % 2)

                }));

                setCourses(courseData);

            }

            catch (error) {

                setError(error.message);

            }

            finally {

                setLoading(false);

            }

        }

        fetchCourses();

    }, []);

    useEffect(() => {

        /*
        Dependency array explanation:
        This effect runs only whenever
        the 'courses' state changes.
        */

        console.log("Courses updated");

    }, [courses]);

    return (

        <>

            <Header />

            <main className="container">

                {

                    loading &&

                    <h2>Loading...</h2>

                }

                {

                    error &&

                    <h2>{error}</h2>

                }

                <div className="course-grid">

                    {

                        courses.map(course => (

                            <CourseCard

                                key={course.id}

                                title={course.title}

                                code={course.code}

                                credits={course.credits}

                            />

                        ))

                    }

                </div>

                <StudentProfile />

            </main>

            <Footer />

        </>

    );

}

export default App;