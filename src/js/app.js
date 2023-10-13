export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    // шаблон на соответствие имени правилам(латинские буквы, цифры, символы подчёркивания и тире)
    const re = /^[a-zA-Z0-9_-]+$/;
    // шаблон наличия подряд более трёх цифр
    const reDigits = /\d{4,}/;
    // шаблон наличия в начале или конце имени цифр, символов подчёркивания или тире
    const reBeginEnd = /^[\d_-]|[\d_-]$/;

    if (!re.test(this.name)) {
      return false;
    }

    if (reDigits.test(this.name)) {
      return false;
    }

    if (reBeginEnd.test(this.name)) {
      return false;
    }

    return true;
  }
}
