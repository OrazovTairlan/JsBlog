import {TransformService} from "../services/transform.service";
export class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
  }

  value() {
    // возвращает объект со значениями формы
    const value = {};
    TransformService.arrayKeys(this.controls).forEach((control) => {
      value[control] = this.form[control].value;
    });
    return value;
  }
}
