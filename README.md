## Projeto MoviesLibLBS
O projeto **MovieLibsLBS** foi desenvolvido para estudo por mim, Lucas Bargas, com base em um layout disponibilizado pelo Matheus Battisti, do hora de codar, no youtube. Este App tem como objetivo apresentar uma lista de filmes separados por categorias, semelhante ao portal do IMDb e TMDB, porém mais simplista. Para a construção deste App foi necessário o consumo da Api gratuita do TMDB.

### Link para visualizar o projeto
<https://movieslib-lbs.netlify.app/>

### Documentação da API do TMDB
<https://developers.themoviedb.org/3>

### Por que fiz este projeto?
Recentemente recapitulei alguns tópicos sobre TypeScript no Youtube. Por isso decidi refatorar este projeto que havia sido desenvolvido em Nextjs sem TypeScript, e então aplicar a ele este superset. Foi um desafio, mas estou feliz com o resultado.

### Principais recursos do App
* Lista de filmes mais populares, melhores avaliados, em cartaz e que serão lançados em breve, com paginação;
* Busca de filmes por nome em português ou inglês;
* Página individual para cada filme e com listagem de similares;
* Páginas por categoria, com paginação.

### Tecnologias utilizadas
#### Front end
<table>
  <tr>
    <td>Nextjs</td>
    <td>Typescript</td>
    <td>Styled Components</td>
    <td>React Icons</td>
  </tr>
  <tr>
    <td>14.0</td>
    <td>5.3</td>
    <td>6.1</td>
    <td>4.11</td>
  <tr>
</table>

### Prints do App (Versões Desktop e Mobile)

#### Página - Início
<img alt="Página de filmes mais populares" src="https://github.com/LucasBargas/movies_lib_lbs/assets/76006347/91efc815-db50-46fd-a534-6ce087f245f9">

#### Página - Mais populares
<img alt="Página de filmes mais populares" src="https://github.com/LucasBargas/movies_lib_lbs/assets/76006347/61c7e97f-5639-4695-b2a0-6503500f04cf">

#### Página - Melhores avaliados
<img alt="Página de filmes melhores avaliados" src="https://github.com/LucasBargas/movies_lib_lbs/assets/76006347/88991558-aafe-4eab-bc7a-c2fbaabcebee">

#### Página - Em cartaz
<img alt="Página de filmes que estão em cartaz" src="https://github.com/LucasBargas/movies_lib_lbs/assets/76006347/b196d3d5-f241-4170-9a8d-f731418dcf04">

#### Página - Em breve
<img alt="Página de filmes que serão lançados em breve" src="https://github.com/LucasBargas/movies_lib_lbs/assets/76006347/c45239c0-3bc6-40b2-8582-382ebfa2f6a9">

#### Página de busca
<img alt="Página de busca de filmes" src="https://github.com/LucasBargas/movies_lib_lbs/assets/76006347/4e23f5bd-9c02-4a29-b692-e76438ba340f">

#### Página de filme individual
<img alt="Página de filme individual" src="https://github.com/LucasBargas/movies_lib_lbs/assets/76006347/e5f6e63d-f559-4590-b4bc-5e523d5da25f">

### Como executar este Front End

#### Pré-requisitos
* Possuir o Nodejs instalado;

#### Clone o repositório
```bash
git clone https://github.com/LucasBargas/movieslib_lbs.git
```
#### Entre na pasta
```bash
cd movieslib_lbs
```
#### Instale as dependências
```bash
npm install
```
#### Execute o App
```bash
npm run dev
```
