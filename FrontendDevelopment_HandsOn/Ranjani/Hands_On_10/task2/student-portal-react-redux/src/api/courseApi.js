export async function getAllCourses() {

    const response = await fetch(
"https://jsonplaceholder.typicode.com/invalid-url"    );


    if (!response.ok) {

        throw new Error("Failed to fetch courses");

    }


    return await response.json();

}