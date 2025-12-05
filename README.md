# SheCodes – Plataforma de Mentoria para Mulheres em Tecnologia

## 🔗 Acesso ao Projeto
- **🌐 Site Online (GitHub Pages):** [https://camille-dallin.github.io/SheCodes/](https://camille-dallin.github.io/SheCodes/)
- **📁 Repositório do Código:** [https://github.com/camille-dallin/SheCodes](https://github.com/camille-dallin/SheCodes)

---

## 👥 Equipe de Desenvolvimento
Projeto desenvolvido como requisito da disciplina de **Programação Web Front-End (UTFPR)**.

| Integrante | RA | GitHub |
|------------|----|--------|
| **Camille Dal'Lin** | a2648784 | [Perfil](https://github.com/camille-dallin) |
| **Alexandre de Lucas** | a2678284 | [Perfil](https://github.com/Alexandreluccass) |
| **Julia Pivello** | a2565684 | [Perfil](https://github.com/juliapivello) |
| **Mateus de Jesus Gonçalves** | a2648903 | [Perfil](https://github.com/IG-jeebas) |

---

## 🎯 Objetivo e ODS
**ODS 5 — Igualdade de Gênero** O **SheCodes** é uma plataforma web que visa diminuir a desigualdade de gênero na tecnologia. Conectamos mulheres iniciantes (mentoradas) a profissionais experientes (mentoras) para orientação de carreira, revisão de código e networking.

---

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Estilização responsiva, uso de Flexbox/Grid e variáveis (Dark Theme).
- **JavaScript (Vanilla):** Manipulação do DOM, Modais e LocalStorage.

---

## 📂 Estrutura do Projeto
O projeto está organizado nos seguintes arquivos principais:

- `index.html`: Página inicial (Landing Page) com apresentação do projeto e listagem de mentoras.
- `form.html`: Formulário de cadastro para alunas (mentoradas).
- `cadastro-mentora.html`: Formulário específico para cadastro de mentoras (com LinkedIn e Cargo).
- `login.html`: Página de login (simulação de fluxo).
- `admin.html`: Painel administrativo para gestão de usuários (CRUD).
- `style.css`: Folha de estilos única contendo todo o design system da aplicação.
- `script.js`: Lógica de interação da página inicial (Modais, Agendamento).
- `admin.js`: Lógica de gerenciamento de usuários e LocalStorage.
- `cadastro.js`: Validação e lógica de salvamento dos formulários.

---

## ✅ Funcionalidades Implementadas
### Projeto 1 (HTML/CSS)
- [x] Layout responsivo (Mobile First).
- [x] Navegação intuitiva e menu dropdown.
- [x] Design estético (Paleta roxa/escura) com efeitos visuais (Glow).
- [x] Validação W3C (HTML e CSS).

### Projeto 2 (JavaScript)
- [x] Persistência de dados usando **LocalStorage**.
- [x] Cadastro dinâmico de usuários.
- [x] Listagem e Exclusão de dados (CRUD).
- [x] Filtro de pesquisa em tempo real no painel Admin.
- [x] Manipulação do DOM (Modais de Termos de Uso e Detalhes da Mentora).

---


## 🚀 Como Executar Localmente

### 📥 1. Clonar o repositório

```bash
git clone https://github.com/camille-dallin/SheCodes.git
````

Entrar no diretório do projeto:

```bash
cd SheCodes
```
---
### ▶️ 2. Executar em um servidor local

Este projeto utiliza **HTML, CSS e JavaScript**, então a forma mais fácil de rodar é usando o **Live Server** no VS Code.

#### Usando VS Code + Live Server:
1. Abra o projeto no **VS Code**
2. Instale a extensão **Live Server**
3. Clique com o botão direito no arquivo `index.html`
4. Selecione **Open with Live Server**

O navegador abrirá automaticamente em um endereço como:
```
http://127.0.0.1:5500
```
Caso não abra automaticamente, acesse:
```
localhost:5500
```