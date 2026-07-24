export async function enrollStudent(studentId, courseId) {


    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                studentId,
                courseId

            })
        }
    );


    if (!response.ok) {

        throw new Error("Enrollment failed");

    }


    return await response.json();


}