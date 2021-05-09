export class Component {
  constructor(id) {
    this.$el = document.getElementById(id)
    this.init()
    console.log("Component")
  }

  init() {}

  hide() {
    this.$el.classList.add('hide')
    this.onHide();
  }

  show() {
    this.$el.classList.remove('hide')
    this.onShow();
  }

  onShow() {
  }

  onHide() {

  }
}