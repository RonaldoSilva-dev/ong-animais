// Espera o documento ser totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão principal de doação
    const botaoDoacao = document.querySelector(".botao-doacao");
    // Seleciona o container das opções
    const opcoesContainer = document.getElementById("opcoes-doacao");

    // Adiciona um "ouvinte de evento" (event listener) de clique ao botão
    botaoDoacao.addEventListener("click", function() {
        // Verifica se o container está oculto
        if (opcoesContainer.style.display === "none" || opcoesContainer.style.display === "") {
            // Se estiver, mostra o container (muda de 'none' para 'block')
            opcoesContainer.style.display = "block";
        } else {
            // Se estiver visível, oculta-o
            opcoesContainer.style.display = "none";
        }
    });

    // Você também pode adicionar lógica para cada botão de valor/pagamento aqui,
    // como redirecionar para uma página de pagamento ou exibir uma mensagem.
});

window.alert('Bem-vido ao site Socorro Animal!')

