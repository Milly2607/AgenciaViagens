// Elementos do Carrossel e Tema
const containerCards = document.getElementById('carrossel-cards');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnTema = document.getElementById('btn-tema');

const tamanhoRolagem = 320;

btnNext.addEventListener('click', function () {
    containerCards.scrollBy({
        left: tamanhoRolagem,
        behavior: 'smooth'
    });
});

btnPrev.addEventListener('click', function () {
    containerCards.scrollBy({
        left: -tamanhoRolagem,
        behavior: 'smooth'
    });
});

// Alternar Modo Escuro
btnTema.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        btnTema.innerText = '🌕 Modo Claro';
    } else {
        btnTema.innerText = '🌑 Modo Escuro';
    }
});

// Lógica do Simulador de Estadia
const btnCalcular = document.getElementById('btn-calcular');

if (btnCalcular) {
    btnCalcular.addEventListener('click', function () {
        const selectDestino = document.getElementById('destino');
        const checkinInput = document.getElementById('checkin').value;
        const checkoutInput = document.getElementById('checkout').value;

        const valorDiariaElem = document.getElementById('valor-diaria');
        const qtdDiasElem = document.getElementById('qtd-dias');
        const valorTotalElem = document.getElementById('valor-total');

        const valorDiaria = parseFloat(selectDestino.value);

        if (!valorDiaria) {
            alert('Por favor, selecione um destino.');
            return;
        }

        if (!checkinInput || !checkoutInput) {
            alert('Por favor, selecione as datas de entrada e saída.');
            return;
        }

        const dataEntrada = new Date(checkinInput);
        const dataSaida = new Date(checkoutInput);

        const diferencaTempo = dataSaida - dataEntrada;
        const totalDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

        if (totalDias <= 0) {
            alert('A data de saída deve ser posterior à data de entrada.');
            return;
        }

        const valorTotal = valorDiaria * totalDias;

        // Atualizando o DOM
        valorDiariaElem.innerText = `R$ ${valorDiaria.toFixed(2).replace('.', ',')}`;
        qtdDiasElem.innerText = totalDias;
        valorTotalElem.innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    });
}

// Lógica para Salvar o Perfil
const formPerfil = document.getElementById('form-perfil');
if (formPerfil) {
    formPerfil.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Dados do perfil salvos com sucesso!');
    });
}
