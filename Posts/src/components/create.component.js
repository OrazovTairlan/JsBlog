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
    event.preventDefault();
    const formData = {
        type: this.$el.type.value,
        ...this.form.value(),
        date: moment().format("l"),
    };
    await apiService.createPost(formData);
    messageInsert();
}

function renderPost() {
    const message = document.getElementById("message");
    if (message) {
        message.style.opacity = "1";
        return;
    }

    return `
    <div id = "message" class = "message">
        <p>Вы создали пост. Сообщение пропадет через 5 секунд</p>
    </div>
    `;
}

function deleteMessage() {
    const message = document.getElementById("message");
    setTimeout(function () {
        message.style.opacity = "0";
    }, 5000);
}

function messageInsert() {
    const body = document.querySelector("body");
    const message = document.querySelector(".message");

    if (messageIsInserted(message)) {
        message.style.opacity = "1";
        deleteMessage();
        return;
    }

    const html = renderPost();
    body.insertAdjacentHTML("afterbegin", html);
    deleteMessage();
}

function messageIsInserted(message) {
    if (message) {
        return true;
    }
}

function timer(time, callback) {
    setInterval(callback, time);
}
