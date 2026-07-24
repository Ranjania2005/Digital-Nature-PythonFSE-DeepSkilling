import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
    fetchAllCourses,
    selectCourses,
    selectCoursesLoading,
    selectCoursesError
} from "../features/courses/courseSlice";


function CoursesPage() {


    const dispatch = useDispatch();


    const courses = useSelector(selectCourses);

    const loading = useSelector(selectCoursesLoading);

    const error = useSelector(selectCoursesError);



    useEffect(() => {

        dispatch(fetchAllCourses());

    }, [dispatch]);



    return (

        <div>

            <h1>
                Student Portal - Courses
            </h1>



            {
                loading && (

                    <h3>
                        Loading courses...
                    </h3>

                )
            }



            {
                error && (

                    <h3>
                        Error: {error}
                    </h3>

                )
            }



            <div>

                {
                    courses.map((course) => (

                        <div key={course.id}>

                            <h2>
                                {course.title}
                            </h2>


                            <p>
                                {course.body}
                            </p>


                        </div>

                    ))
                }

            </div>


        </div>

    );


}


export default CoursesPage;