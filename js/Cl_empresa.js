export default class Cl_empresa {
  constructor() {
    this.acum = 0;
  }

  montoADicional() {
    return this.acum;
  }

  procesare(e) {
    this.acum += e.aumentoSueldo();
  }
}
