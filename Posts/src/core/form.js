
export class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
    console.log();
    console.log("Form")
    console.log(this.controls);
  }

  value() {
    const value = {}
    Object.keys(this.controls).forEach(control => {
      value[control] = this.form[control].value
    })
    return value
  }
}