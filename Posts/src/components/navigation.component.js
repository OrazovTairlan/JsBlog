import {Component} from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);
        this.tabs = [];
    }
    init() {
        this.$el.addEventListener("click", tabClickHandler.bind(this));
    }

    registerTabs(tabs) {
        this.tabs = tabs;
    }
}

function tabClickHandler(event) {
    const $tabs = document.querySelectorAll(".tab");
    event.preventDefault();
    if (isTab(event, "tab")) {
        hideTabs(Array.from($tabs));
        event.target.classList.add("active");
        const activeTab = showActiveTab(this.tabs, event); // определяем нажатый таб
        this.tabs.forEach((t) => t.component.hide());
        activeTab.component.show();
    }
}

function isTab(event, aim) {
    if (event.target.classList.contains(aim)) {
        return true;
    }
}

function hideTabs(tabs) {
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })
}

function showActiveTab(tabs, event) {
    return tabs.find(
        tab => tab.name === event.target.dataset.name
    );
}
