# Teste Técnico - Frontend

## Descrição do Projeto

O objetivo deste teste técnico é avaliar suas habilidades em desenvolvimento frontend utilizando TypeScript e Tailwind CSS. Você irá criar uma tela de login que faz uma requisição para a API de autenticação JWT fake e, após um login bem-sucedido, redireciona o usuário para uma página que exibe suas informações.

## Requisitos

1. **Tecnologias Obrigatórias**:
   - React
   - TypeScript
   - Tailwind CSS (para estilização)
   - Axios (para chamadas de API)
   - React Router

2. **Funcionalidades**:
   - Criar uma tela de login com os seguintes campos:
     - Email
     - Senha
   - Um botão para realizar o login.
   - Ao clicar no botão de login, faça uma requisição POST para a seguinte URL:
     ```
     https://api.escuelajs.co/api/v1/auth/login
     ```
     Com o corpo da requisição no seguinte formato:
     ```
     {
       "email": "john@mail.com",
       "password": "changeme"
     }
     ```
   - Se a autenticação for bem-sucedida, armazene o token JWT retornado e redirecione o usuário para uma página que exibe suas informações.
   - Para obter as informações do usuário, faça uma requisição GET para:
     ```
     https://api.escuelajs.co/api/v1/auth/profile
     ```
     Incluindo o token JWT no cabeçalho da requisição:
     ```
     Authorization: Bearer {seu_access_token}
     ```
   - Caso a autenticação falhe, exiba uma mensagem de erro na tela.

3. **Estrutura do Projeto**:
   - Crie uma estrutura básica de projeto com as seguintes pastas

     - `src/`: onde o código-fonte da aplicação estará.
     - `components/`: onde os componentes reutilizáveis serão armazenados.
     - `pages/`: onde as páginas da aplicação serão armazenadas.


## Instruções

1. **Configuração do Ambiente**:
   - Clone este repositório: `git clone <URL_DO_REPOSITORIO>`
   - Navegue até a pasta do projeto: `cd <NOME_DO_PROJETO>`
   - Instale as dependências: 
     ```
     npm install
     ```
    - E finalmente, rode o ambiente de desenvolvimento:
    ```
     npm run dev
     ```

2. **Execução**:
   - Para iniciar o servidor de desenvolvimento, utilize o comando:
     ```
     npm start
     ```
   - A aplicação estará disponível em `http://localhost:3000`.


