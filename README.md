# marvel-comics
Projeto pessoal. App que comunica com API da Marvel e lista personagens e comics que participam

> Ser o melhor que você pode ser é possível para qualquer um que focar nisso.

## tecnologias utilizadas
- [x] Reack Hooks
- [x] Redux
- [x] Redux Thunk
- [x] Redux Multi
- [x] Formik
- [x] React Navigation v5
- [x] Axios
- [x] Prettier
- [x] Eslint
- [x] Styled Components

### Setup para execução do projeto
#### Instale as dependências
yarn install

#### Instale a CLI do react native
yarn global add react-native-cli

#### iOS
react-native run-ios --simulator "iPhone X"

#### Android
react-native run-android

**Obs:** é necessário efetuar um cadastro no sistema developer.marvel.com pois será gerado suas chaves publicas e privadas para conexao com a API da Marvel. Feito o cadastro, e assim que obtido as chaves, acesse a pasta src do projeto e crie uma pasta chamada "constants" colocando um arquivo index.js dentro desta pasta. Neste arquivo insira o conteúdo mostrado abaixo inserindo no devido local suas chaves de acesso.
```
export const PUBLIC_KEY = '';
export const PRIVATE_KEY = '';
```
