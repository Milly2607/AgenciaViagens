# TechJourney

Site estático sobre carreiras e tecnologias da área de TI, com cartões de profissões, um simulador salarial **ilustrativo** e descrições de linguagens.

## Como executar

Não há dependências nem etapa de compilação. Abra `index.html` no navegador ou sirva esta pasta com um servidor local (por exemplo, a extensão Live Server do VS Code). Para testar em celular na mesma rede, use um servidor local acessível pelo dispositivo.

## Funcionalidades

- Navegação entre Carreiras, Simulador e Linguagens.
- Carrossel de carreiras com rolagem por botões, toque ou teclado.
- Modais com informações adicionais, fecháveis pelo botão, por Escape ou por clique fora.
- Modo claro/escuro com preferência salva neste navegador quando o armazenamento local está disponível.

## Limites do conteúdo

Os valores de remuneração usados nos cartões e no simulador são exemplos definidos no código, não resultados de uma pesquisa salarial. Antes de apresentar números como dados reais, as responsáveis pelo projeto devem selecionar fontes, período, região e metodologia. Outras decisões de conteúdo estão em [NEEDS-OWNER.md](NEEDS-OWNER.md).

## Arquivos principais

- `index.html`: conteúdo e estrutura da página.
- `style.css`: aparência, adaptação a telas menores e preferências de movimento.
- `script.js`: navegação, tema, simulador e modais.
- `assets/`: imagens das carreiras.
