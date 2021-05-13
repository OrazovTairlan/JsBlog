import { Component } from "../core/component";
import { apiService } from "../services/api.service";
import { TransformService } from "../services/transform.service";
import moment from "moment";
import { loader } from "../index";

export class PostsComponent extends Component {
  constructor(id) {
    super(id);
  }

  async onShow() {
    loader.show();
    let fbData = await apiService.fetchPosts();
    const posts = TransformService.fbObjectToArray(fbData);
    const html = posts.map((post) => renderPost(post));
    loader.hide();
    this.$el.insertAdjacentHTML("afterbegin", html.join(" "));
  }

  onHide() {
    this.$el.innerHTML = "";
  }
}

function renderPost(post) {
  return `
    <div class="panel" data-id = ${post.id}>
        <div class="panel-head">
          <p class="panel-title">${post.title}</p>
          <ul class="tags">
            <li class="tag tag-blue tag-rounded">${checkType(post)}</li>
          </ul>
        </div>
        <div class="panel-body">
          <p class="multi-line">${post.fulltext}</p>
        </div>
        <div class="panel-footer w-panel-footer">
          <small>${post.date.split("/").join(".")}</small>
        </div>
      </div>
    `;
}

function checkType(post) {
  if (post.type == "note") {
    return "Заметка";
  } else if (post.type == "Новость"){
    return "Новость";
  }
}
