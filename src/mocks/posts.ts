interface iPost {
  id: number;
  date: string;
  title: string;
  description: string;
}

export const posts: iPost[] = [
  {
    date: "10 de jul, 2024",
    title: "Introdução ao JavaScript: Como começar a programar",
    description:
      "JavaScript é uma das linguagens mais populares no desenvolvimento web. Neste post, abordamos como iniciar com essa linguagem e os primeiros passos para criar aplicações web dinâmicas.",
    id: 2,
  },
  {
    date: "25 de mai, 2024",
    title: "As melhores práticas para escrever um código limpo",
    description:
      "Manter um código organizado e legível é essencial para um bom desenvolvimento de software. Descubra as principais práticas para escrever um código limpo e de fácil manutenção.",
    id: 3,
  },
  {
    date: "12 de jun, 2024",
    title: "Entenda o que é Git e como usá-lo no seu projeto",
    description:
      "Git é uma ferramenta essencial para o controle de versão em projetos de desenvolvimento. Aprenda como funciona e as melhores práticas para gerenciar o histórico de alterações do seu código.",
    id: 4,
  },
  {
    date: "30 de set, 2024",
    title: "O que é um framework e por que ele facilita o desenvolvimento",
    description:
      "Frameworks são ferramentas que agilizam o desenvolvimento de aplicações, oferecendo uma estrutura pré-definida. Neste artigo, exploramos os principais frameworks e como utilizá-los.",
    id: 5,
  },
  {
    date: "15 de out, 2024",
    title: "Front-end vs. Back-end: Entenda a diferença",
    description:
      "O desenvolvimento web é dividido em front-end e back-end, cada um com suas especificidades. Saiba mais sobre as diferenças entre essas áreas e quais habilidades são necessárias para cada uma.",
    id: 6,
  },
];
