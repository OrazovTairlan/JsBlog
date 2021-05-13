class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    async createPost(post) {
        // принимает на входе объект, и создает пост
        try {
            const request = new Request(this.url + "/posts.json", {
                method: "post",
                body: JSON.stringify(post),
            });
            return useRequest(request);
        } catch (error) {
        }
    }

    async fetchPosts() {
        // возвращает объект
        try {
            const request = new Request(`${this.url}/posts.json`, {
                method: "get",
            });
            return useRequest(request);
        } catch (error) {
            console.log(error);
        }
    }
}

async function useRequest(request) {
    const response = await fetch(request);
    return await response.json();
}
export const apiService = new ApiService(
    "https://festive-oxide-292709-default-rtdb.firebaseio.com/"
);
