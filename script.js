document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // LÓGICA DAS ABAS (NAVEGAÇÃO)
    // ==========================================
    const botoesAba = document.querySelectorAll('.btn-aba');
    const secoesAba = document.querySelectorAll('.aba-conteudo');

    botoesAba.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();

            const idAlvo = this.getAttribute('data-target');

            botoesAba.forEach(btn => btn.classList.remove('ativo'));
            this.classList.add('ativo');

            secoesAba.forEach(secao => secao.classList.remove('ativa'));
            
            const secaoAlvo = document.getElementById(idAlvo);
            if (secaoAlvo) {
                secaoAlvo.classList.add('ativa');
            }
        });
    });

    // ==========================================
    // LÓGICA DO CARROSSEL & TEMA
    // ==========================================
    const containerCards = document.getElementById('carrossel-cards');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnTema = document.getElementById('btn-tema');
    const tamanhoRolagem = 320;
     
    if (btnNext && containerCards) {
        btnNext.addEventListener('click', function() {
            containerCards.scrollBy({ left: tamanhoRolagem, behavior: 'smooth' });
        });
    }
     
    if (btnPrev && containerCards) {
        btnPrev.addEventListener('click', function() {
            containerCards.scrollBy({ left: -tamanhoRolagem, behavior: 'smooth' });
        });
    }
     
    if (btnTema) {
        btnTema.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            btnTema.innerText = document.body.classList.contains('dark-theme') ? '☀️ Claro' : '🌙 Escuro';
        });
    }
     
    // ==========================================
    // LÓGICA DO SIMULADOR DE SALÁRIO
    // ==========================================
    const btnCalcular = document.getElementById('btn-calcular');
     
    if (btnCalcular) {
        const selectCarreira = document.getElementById('carreira');
        const selectNivel = document.getElementById('nivel');
        const spanCarreira = document.getElementById('resultado-carreira');
        const spanNivel = document.getElementById('resultado-nivel');
        const spanSalario = document.getElementById('valor-salario');
     
        const salarios = {
            frontend: { nome: 'Desenvolvedor Front-End', junior: 3000, pleno: 5500, senior: 9000 },
            backend: { nome: 'Desenvolvedor Back-End', junior: 3500, pleno: 6500, senior: 11000 },
            mobile: { nome: 'Desenvolvedor Mobile', junior: 3800, pleno: 7000, senior: 12000 },
            dba: { nome: 'Administrador de Banco de Dados', junior: 3200, pleno: 6000, senior: 10000 },
            seguranca: { nome: 'Segurança da Informação', junior: 4000, pleno: 7500, senior: 13000 },
            devops: { nome: 'Engenheiro DevOps', junior: 4200, pleno: 8000, senior: 14000 },
            dados: { nome: 'Cientista de Dados', junior: 4500, pleno: 8500, senior: 15000 },
            uxui: { nome: 'Designer UX/UI', junior: 3100, pleno: 5800, senior: 9500 },
            qa: { nome: 'Analista de QA / Testes', junior: 2800, pleno: 5000, senior: 8500 }
        };
     
        const nomesNivel = {
            junior: 'Júnior (0-2 anos)',
            pleno: 'Pleno (2-5 anos)',
            senior: 'Sênior (5+ anos)'
        };
     
        btnCalcular.addEventListener('click', function() {
            if (!selectCarreira.value) {
                alert('Por favor, selecione uma carreira!');
                return;
            }
            if (!selectNivel.value) {
                alert('Por favor, selecione o nível de experiência!');
                return;
            }
     
            const carreiraEscolhida = salarios[selectCarreira.value];
            const salario = carreiraEscolhida[selectNivel.value];
     
            spanCarreira.innerText = carreiraEscolhida.nome;
            spanNivel.innerText = nomesNivel[selectNivel.value];
            spanSalario.innerText = 'R$ ' + salario.toFixed(2).replace('.', ',');
            spanSalario.style.color = '#2e7d32';
        });
    }

    // ==========================================
    // MODAL DE CARREIRAS
    // ==========================================
    const detalhesCarreiras = {
        frontend: {
            titulo: "Desenvolvedor Front-End",
            descricao: "Responsável por criar a interface com a qual o usuário interage diretamente.",
            diaADia: "Cria layouts responsivos, integra APIs REST e otimiza a performance visual de aplicações web.",
            mercado: "Alta procura por profissionais com conhecimentos em frameworks modernos (React, Vue, Angular).",
            cursos: "Ciência da Computação, Análise e Desenvolvimento de Sistemas, Bootcamps Web."
        },
        backend: {
            titulo: "Desenvolvedor Back-End",
            descricao: "Trabalha nos bastidores, garantindo que a lógica de negócio e as regras do sistema funcionem perfeitamente.",
            diaADia: "Desenvolve APIs, gerencia bancos de dados, cuida da autenticação de usuários e segurança do servidor.",
            mercado: "Constante necessidade em empresas de todos os portes para sustentação de sistemas complexos.",
            cursos: "Engenharia de Software, Sistemas de Informação, Ciência da Computação."
        },
        mobile: {
            titulo: "Desenvolvedor Mobile",
            descricao: "Especialista na criação de aplicações para smartphones e tablets (iOS e Android).",
            diaADia: "Desenvolve interfaces adaptadas a telas sensíveis ao toque, integra recursos do celular (GPS, câmera) e publica nas lojas App Store/Play Store.",
            mercado: "Forte expansão devido ao crescimento contínuo do uso de aplicativos móveis para serviços do dia a dia.",
            cursos: "Análise e Desenvolvimento de Sistemas, Cursos focados em React Native/Flutter/Kotlin."
        },
        dba: {
            titulo: "Administrador de Banco de Dados (DBA)",
            descricao: "Profissional encarregado da segurança, integridade e rapidez no acesso aos dados.",
            diaADia: "Modela tabelas, cria rotinas de backup, otimiza consultas SQL e monitora a saúde dos servidores de dados.",
            mercado: "Essencial em instituições financeiras, e-commerce e grandes corporações.",
            cursos: "Gestão da Tecnologia da Informação, Ciência da Computação."
        },
        seguranca: {
            titulo: "Segurança da Informação",
            descricao: "Protege a infraestrutura tecnológica contra ciberataques e vazamento de dados.",
            diaADia: "Realiza testes de intrusão (pentest), monitora ameaças em tempo real e implementa políticas de segurança.",
            mercado: "Uma das áreas com maior crescimento e escassez de profissionais qualificados no mundo inteiro.",
            cursos: "Defesa Cibernética, Redes de Computadores, Certificações de Segurança (CEH, CISSP)."
        },
        devops: {
            titulo: "Engenheiro DevOps",
            descricao: "Ponte entre a equipe de desenvolvimento e a equipe de infraestrutura/operações.",
            diaADia: "Automatiza a publicação de código (CI/CD), gerencia serviços em nuvem (AWS, Azure) e configura containers Docker/Kubernetes.",
            mercado: "Altamente valorizado pela necessidade de acelerar entregas de software com estabilidade.",
            cursos: "Engenharia de Software, Redes de Computadores, Certificações Cloud."
        },
        dados: {
            titulo: "Cientista de Dados",
            descricao: "Transforma dados brutos em insights estratégicos para a tomada de decisões de negócio.",
            diaADia: "Cria modelos estatísticos, aplica algoritmos de Aprendizado de Máquina (Machine Learning) e constrói relatórios analíticos.",
            mercado: "Área em constante expansão impulsionada pelo avanço da Inteligência Artificial.",
            cursos: "Estatística, Ciência de Dados, Matemática Computacional, Engenharia de Dados."
        },
        uxui: {
            titulo: "Designer UX/UI",
            descricao: "Projeta experiências intuitivas (UX) e interfaces amigáveis (UI) para produtos digitais.",
            diaADia: "Desenha protótipos interativos, realiza pesquisas com usuários e define a identidade visual de aplicações.",
            mercado: "Crucial para empresas que buscam retenção e satisfação dos usuários.",
            cursos: "Design Digital, Design de Interação, Bootcamps de UX/UI."
        },
        qa: {
            titulo: "Analista de QA / Testes",
            descricao: "Garante a qualidade do produto final identificando falhas antes do lançamento.",
            diaADia: "Escreve cenários de teste, automatiza rotinas de verificação e reporta erros às equipes de desenvolvimento.",
            mercado: "Indispensável no desenvolvimento ágil de software para evitar custos de correção pós-lançamento.",
            cursos: "Análise e Desenvolvimento de Sistemas, Certificações ISTQB."
        }
    };

    const modalCarreira = document.getElementById('modal-carreira');
    const btnFecharCarreira = document.getElementById('btn-fechar-modal');
    const botoesSaibaMais = document.querySelectorAll('.btn-comprar');

    botoesSaibaMais.forEach(botao => {
        botao.addEventListener('click', function() {
            const chaveCarreira = this.getAttribute('data-carreira');
            const info = detalhesCarreiras[chaveCarreira];

            if (info && modalCarreira) {
                document.getElementById('modal-titulo').innerText = info.titulo;
                document.getElementById('modal-descricao').innerText = info.descricao;
                document.getElementById('modal-dia-a-dia').innerText = info.diaADia;
                document.getElementById('modal-mercado').innerText = info.mercado;
                document.getElementById('modal-cursos').innerText = info.cursos;

                modalCarreira.style.display = 'flex';
            }
        });
    });

    if (btnFecharCarreira) {
        btnFecharCarreira.addEventListener('click', function() {
            modalCarreira.style.display = 'none';
        });
    }

    // ==========================================
    // MODAL DAS LINGUAGENS
    // ==========================================
    const detalhesLinguagens = {
        javascript: {
            titulo: "JavaScript",
            descricao: "Linguagem de programação essencial para a web, usada para criar interatividade e dinamicidade nos sites."
        },
        python: {
            titulo: "Python",
            descricao: "Linguagem versátil e fácil de aprender, muito usada em Inteligência Artificial, Ciência de Dados e automação."
        },
        html5: {
            titulo: "HTML5",
            descricao: "Linguagem de marcação usada para estruturar os textos, imagens, botões e elementos de uma página web."
        },
        css3: {
            titulo: "CSS3",
            descricao: "Linguagem de estilos usada para dar cor, layout, animações e design visual para as páginas HTML."
        },
        java: {
            titulo: "Java",
            descricao: "Linguagem poderosa e segura, amplamente usada em grandes empresas, sistemas bancários e aplicativos Android."
        },
        php: {
            titulo: "PHP",
            descricao: "Linguagem focada no desenvolvimento back-end para criar sites dinâmicos e conectar com bancos de dados."
        },
        react: {
            titulo: "React",
            descricao: "Biblioteca criada pelo Facebook/Meta para construir interfaces de usuário modernas, rápidas e reativas."
        },
        nodejs: {
            titulo: "Node.js",
            descricao: "Ambiente de execução que permite rodar código JavaScript fora do navegador, diretamente no servidor (Back-End)."
        },
        mysql: {
            titulo: "MySQL",
            descricao: "Um dos bancos de dados relacionais mais populares do mundo para armazenar e organizar informações."
        },
        flutter: {
            titulo: "Flutter",
            descricao: "Framework do Google para criar aplicativos nativos para Android e iOS usando um único código base."
        },
        kotlin: {
            titulo: "Kotlin",
            descricao: "Linguagem oficial recomendada pelo Google para o desenvolvimento moderno de aplicativos Android."
        },
        linux: {
            titulo: "Linux",
            descricao: "Sistema operacional de código aberto usado na maioria dos servidores do mundo por ser estável e seguro."
        }
    };

    const modalLinguagem = document.getElementById('modal-linguagem');
    const btnFecharLang = document.getElementById('btn-fechar-modal-lang');
    const botoesLang = document.querySelectorAll('.btn-lang');

    botoesLang.forEach(botao => {
        botao.addEventListener('click', function() {
            const chaveLang = this.getAttribute('data-lang');
            const info = detalhesLinguagens[chaveLang];

            if (info && modalLinguagem) {
                document.getElementById('modal-lang-titulo').innerText = info.titulo;
                document.getElementById('modal-lang-descricao').innerText = info.descricao;

                modalLinguagem.style.display = 'flex';
            }
        });
    });

    if (btnFecharLang) {
        btnFecharLang.addEventListener('click', function() {
            modalLinguagem.style.display = 'none';
        });
    }

    // Fechar os modais ao clicar fora da caixa branca
    window.addEventListener('click', function(event) {
        if (event.target === modalCarreira) {
            modalCarreira.style.display = 'none';
        }
        if (event.target === modalLinguagem) {
            modalLinguagem.style.display = 'none';
        }
    });

});