import {Component} from "../core/component";
import {renderPost} from "./posts.component";
import {apiService} from "../services/api.service";
import {TransformService} from "../services/transform.service";

export class SearchComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener("keyup", handleSearch.bind(this));
    }
}

function filterPosts(posts, searchText) {
    return posts.filter(post => post.title.toLowerCase().trim().indexOf(searchText.toLowerCase().trim()) > -1);
}

async function handleSearch(event) {
    const $posts = document.querySelector("#posts");
    $posts.innerHTML = "";
    const fbPost = await apiService.fetchPosts();
    const arrFbPost = TransformService.fbObjectToArray(fbPost);
    const filterPostsArray = filterPosts(arrFbPost, event.target.value);
    const html = filterPostsArray.map(post => renderPost(post));
    $posts.insertAdjacentHTML("afterbegin", html.join(" "));
}