import { Component } from "../core/component";
import { Form } from "../core/form";
import { apiService } from "../services/api.service";

import moment from "moment";

export class CreateComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener("submit", submitHandler.bind(this));
        this.form = new Form(this.$el, {
            title: null,
            fulltext: null,
            type: null,
        });
    }
}

async function submitHandler(event) {
    const body = document.querySelector("body");
    let points = null;
    event.preventDefault();
    const formData = {
        type: this.$el.type.value,
        ...this.form.value(),
        date: moment().format("l"),
    };
    await apiService.createPost(formData);
    points++;
    const html = renderPost();
    setTimeout(deleteMessage, 1000);
    body.insertAdjacentHTML("afterbegin", html);
}

function renderPost() {
    const message = document.getElementById("message");
    if (message) {
        message.style.opacity = "1";
        return;
    }

    return `
    <div id = "message" style = "
    display: flex;
    position: fixed;
    background-color: green;
    border-radius: 11px;
    right: 0;
    top: 0;
    z-index: 99999999999;
    padding: 17px;
    text-align: center;
    transition: all 1s;
    opacity: 1;
   ">
        <p>Вы создали пост. Сообщение пропадет через секунду</p>
    </div>
    `;
}

function deleteMessage() {
    const message = document.getElementById("message");
    message.style.opacity = "0";
}
