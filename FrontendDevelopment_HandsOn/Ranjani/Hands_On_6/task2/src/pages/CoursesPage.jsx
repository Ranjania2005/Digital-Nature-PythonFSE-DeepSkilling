import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";
import courses from "../data/courses";

function CoursesPage() {

  const { enrollCourse } = useContext(EnrollmentContext);

  return (

    <div className="container">

      <h2>Courses</h2>

      {

        courses.map((course) => (

          <div
            className="course-card"
            key={course.id}
          >

            <h3>{course.name}</h3>

            <p>

              Code : {course.code}

            </p>

            <p>

              Credits : {course.credits}

            </p>

            <button

              onClick={() => enrollCourse(course)}

            >

              Enroll

            </button>

          </div>

        ))

      }

    </div>

  );

}

export default CoursesPage;