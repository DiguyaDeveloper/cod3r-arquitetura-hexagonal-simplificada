
<h1 align="center">Arquitetura Hexagonal Simplificada by Cod3r</h1>

<p align="center">Esse projeto é um exemplo simplificado de como funciona uma arquitetura hexagonal</p>

<h4 align="center"> 
	🚀 Em construção...  🚧
</h4>


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Deno](https://deno.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o projeto

```bash
# Instalando o deno (linux)
$ snap install deno

# Execute a aplicação em modo de desenvolvimento
$ deno task dev
```

### Porta e Adaptadores

O que é uma Porta?

Uma porta é a interface dizendo o que o CasoDeUso precisa para funcionar dentro da aplicação, é uma forma de comunicar com o mundo exterior.

O que é um Adaptador?

A implementação de uma interface "Porta", adaptadores são a conexão entre a aplicação e o mundo externo, Ex.: Dependencia com libs para determinado CasoDeUso ou um resource de banco de dados.