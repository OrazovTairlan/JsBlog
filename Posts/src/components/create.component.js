import {Component} from '../core/component'
import {Form} from '../core/form'
import {apiService} from "../services/api.service";
import moment from "moment";

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
        console.log("Create")
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))
        moment().locale();
        this.form = new Form(this.$el, {
            title: null,
            fulltext: null,
            type: null,
        })
    }
}

async function submitHandler(event) {
    event.preventDefault();
        const formData = {
            type: this.$el.type.value,
            ...this.form.value(),
            date: moment().format("l")
        };
        console.log(formData);
        await apiService.createPost(formData);
        console.log('Submit', formData)
}