const pokedevs = document.querySelectorAll('.pokedev');
const cartoes = document.querySelectorAll('.cartao-pokedev');

pokedevs.forEach(pokedev => {
    pokedev.addEventListener('click', function () {
        const cartaoAberto = document.querySelector('.aberto');
        if (cartaoAberto) {
            cartaoAberto.classList.remove('aberto');
        }

        const id = this.id; 
        const cartaoParaAbrir = document.getElementById(`cartao-${id}`);

        pokedevs.forEach(p => p.classList.remove('ativo'));

        this.classList.add('ativo');

        if (cartaoParaAbrir) {
            cartaoParaAbrir.classList.add('aberto');
        }
    });
});

// Passo 1: Seleciona todos os elementos da listagem de pokedevs
// Passo 2: Identificar o evento de clique nos elementos da listagem
// Passo 3: Remover a classe 'aberto' do cartão que está aberto
// Passo 4: Obter o ID do pokedev selecionado
// Passo 5: Remover a classe 'ativo' dos pokedevs selecionados
// Passo 6: Adicionar a classe 'ativo' ao pokedev selecionado
// Mostrar o cartão correspondente