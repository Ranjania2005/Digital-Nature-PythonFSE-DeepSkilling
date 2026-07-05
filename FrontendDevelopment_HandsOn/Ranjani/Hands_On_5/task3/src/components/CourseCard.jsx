function CourseCard({ title, code, credits }) {

    return (

        <div className="course-card">

            <h2>{title}</h2>

            <p>

                <strong>Code :</strong> {code}

            </p>

            <p>

                <strong>Credits :</strong> {credits}

            </p>

        </div>

    );

}

export default CourseCard;