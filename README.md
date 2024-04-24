# Modularizando Aplicações React

Esse repositório foi criado com o objetivo de demonstrar o processo de refatoração e desacoplamento de código.
Foi criada uma simples aplicação em `React`, com todas as responsabilidades tratadas em uma único componente.
Em seguida, o código foi refatorado para separar essas responsabilidades em diferentes camadas, tornando o código mais modular, mais fácil de manter e mais escalável.
Dessa forma, o papel da biblioteca `React` é apenas o de criar interfaces visuais.
Para demonstrar o desacomplamento, foi posteriormente criado um projeto utilizando `Svelte`, no qual foram copiadas as camadas do outro projeto e apenas recriados os componentes visuais.

### Decisões
Para a aplicação `React`, foi utilizado o framework `Next.js` apenas para conseguir ter facilmente um endpoint de uma api para requisição dos dados. Entretanto, nenhuma feature de renderização no servidor foi utilizada. Como o projeto é apenas para demonstração de alguns conceitos, a utilização do framework foi o caminho mais simples.
Da mesma forma, utilizei o `SvelteKit`, mantendo apenas a api no projeto `Next.js`.

### Etapas
Cada etapa da refatoração pode ser melhor visualizada nos `commits`.
Não detalharei aqui cada passo, mas de forma geral as etapas foram:

- Primeiramente foi criada a aplicação com todas as responsabilidades dentro de um componente, sendo elas:
  - Comunicação com api
  - Tratamento de resposta da api
  - Definição de regras de negócios
  - Controle de estado
  - Renderização da view

- O primeiro passo da refatoração foi a separação de toda lógica em um `custom hook`, deixando o componente apenas responsável por entregar o `jsx`. Assim, conseguimos separar claramente a lógica da parte visual do componente

- Separação da estrutura em dois componentes, um responsável pela listagem e outro por renderizar a acomodação em si

- Separação do serviço para requisição dos dados da api

- Criação de uma `entidade` para definição de regras de negócio. Com isso, toda regra de negócio fica isolada, desacoplada da ferramenta (`React`) e facilmente testável

- Separação de um `use case`, que orquestra a requisição dos dados, tratamento deles e instanciamento das acomodações. O `use case` define uma `interface` de um serviço, que é uma dependência que deve ser injetada no instanciamento da classe. Aqui poderia ser utilizado algum padrão como um `gateway` ou um `repository`, mas para simplificar a explicação, define apenas a `interface` da função de serviço

- Para a aplicação com `Svelte`, copiei os arquivos de `entidade`, `use case`  e `serviço` e adicionei ao novo projeto. A única adaptação que fiz foi alterar o `endpoint` do serviço, uma fez que mantive a api no projeto `Next.js`.

- Criação dos componentes em `Svelte`


### Próximos passos

Com as camadas claramente separadas, podemos nomear as pastas seguindo algumas definições da `Clean Architecture`.

Na camada de serviços, não defini um `httpClient` específico para a aplicação, o que poderia facilitar qualquer possível refatoração, caso quisesse mudar o `fetch` para o `axios`, por exemplo.


### Conclusão

Este projeto serve como um exemplo prático de como refatorar e desacoplar código em uma aplicação web moderna.


### Materiais complementares

[Apresentação da tech talk](https://pitch.com/v/modularizing-react-applications-xpg3ah/e176a7cd-02c4-446c-8659-5d8136782830)

Essa tech talk foi inspirada no artigo [Modularizing React Applications with Established UI Patterns](https://martinfowler.com/articles/modularizing-react-apps.html) de [Juntao](https://www.icodeit.com.au/).

Além do artigo, alguns materiais me auxiliaram nos estudos dos temas abordados:
- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) de Robert C. Martin
- [Clean Architecture no ReactJs](https://www.youtube.com/watch?v=iUQVZHzqGuc) de Rodrigo Manguinho
- [Clean Architecture on Frontend - talk](https://www.youtube.com/watch?v=ThgqBecaq_w) de Alex Bespoyasov
- [Clean Architecture on Frontend](https://bespoyasov.me/blog/clean-architecture-on-frontend/) de Alex Bespoyasov
- [Clean Architecture Frontend](https://github.dev/rodrigobranas/clean_architecture_frontend_fullcycle) de Rodrigo Branas
- [Clean Architecture, front-end e o caos](https://lab.vortx.com.br/clean-architecture-front-end-e-o-caos/) de Kelvin Sanches Felix
- [Domain-Driven Frontend](https://www.youtube.com/watch?v=8AUxhphOl5I) de Francesco Strazzullo



