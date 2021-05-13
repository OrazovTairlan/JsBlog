export class Component {
  constructor(id) {
    this.$el = document.getElementById(id);
    this.init();
  }

  init() {
    // все подклассы переопределят данный метод
  }

  hide() {
    this.$el.classList.add("hide");
    this.onHide();
  }

  show() {
    this.$el.classList.remove("hide");
    this.onShow();
  }

  onShow() {
    // все подклассы переопределят данный метод
  }

  onHide() {
    // все подклассы переопределят данный метод
  }
}
