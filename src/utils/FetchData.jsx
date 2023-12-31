export async function getAllPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    if (!response.ok) {
        throw { message: "error", status: 500 }
    }
    return data;


}