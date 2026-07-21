import { useParams } from "react-router-dom";
import courses from "../data/courses";

function CourseDetailPage() {

  const { courseId } = useParams();

  const course = courses.find(

    (course) => course.id === Number(courseId)

  );

  if (!course) {

    return <h2>Course Not Found</h2>;

  }

  return (

    <div className="container">

      <h2>Course Details</h2>

      <div className="course-card">

        <h3>{course.name}</h3>

        <p>
          <strong>Code :</strong> {course.code}
        </p>

        <p>
          <strong>Credits :</strong> {course.credits}
        </p>

        <p>
          <strong>Grade :</strong> {course.grade}
        </p>

      </div>

    </div>

  );

}

export default CourseDetailPage;