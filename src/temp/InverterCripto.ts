import ProvedorCripto from "../usuario/model/ProvedorCripto.ts";

export default class InverterCripto implements ProvedorCripto {
  async criptografar(senha: string): Promise<string> {
    return senha.split("").reverse().join("");
  }

  async comparar(senha: string, senhaCripto: string): Promise<boolean> {
    return senha.split("").reverse().join("") === senhaCripto;
  }
}
