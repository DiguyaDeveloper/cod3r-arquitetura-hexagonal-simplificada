import Usuario from "../model/Usuario.ts";

export default class ColecaoUsuarios {
  static readonly usuarios: Usuario[] = [];

  async adicionar(usuario: Usuario): Promise<void> {
    ColecaoUsuarios.usuarios.push(usuario);
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return (
      ColecaoUsuarios.usuarios.find((usuario) => usuario.email === email) ??
      null
    );
  }
}
