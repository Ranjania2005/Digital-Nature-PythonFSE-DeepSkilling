import { Link, useNavigate } from "react-router-dom";
import courses from "../data/courses";

function CoursesPage() {

  const navigate = useNavigate();

  function handleEnroll() {

    alert("Course Enrolled Successfully!");

    navigate("/profile");

  }

  return (

    <div className="container">

      <h2>Courses</h2>

      {courses.map((course) => (

        <div className="course-card" key={course.id}>

          <h3>{course.name}</h3>

          <p>
            <strong>Code :</strong> {course.code}
          </p>

          <p>
            <strong>Credits :</strong> {course.credits}
          </p>

          <Link to={`/courses/${course.id}`}>

            <button>View Details</button>

          </Link>

          <button onClick={handleEnroll}>

            Enroll

          </button>

        </div>

      ))}

    </div>

  );

}

export default CoursesPage;