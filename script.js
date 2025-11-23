let cardContainer = document.querySelector(".card-container");
let dados = [];
const searchInput = document.getElementById('search-input');


function buscar(event) {
    event.preventDefault(); 
    const termoBusca = searchInput.value.toLowerCase();

    if (termoBusca.trim() === '') {
        renderizarCards(dados); 
    }

    const dadosFiltrados = dados.filter(dado => {
        return dado.empresa.toLowerCase().includes(termoBusca);
    });

    renderizarCards(dadosFiltrados);
}


function renderizarCards(dadosParaRenderizar){
    cardContainer.innerHTML = "";

    if (dadosParaRenderizar.length === 0) {
        const noResultsMessage = `<p class="no-results-message"><strong>Nenhum resultado encontrado para a sua busca.</strong></p>`;
        cardContainer.innerHTML = noResultsMessage;
        return;
    }

    for (let dado of dadosParaRenderizar) {
        let article = document.createElement("article");
        article.classList.add("card");

        
        const jogosHtml = dado.jogos && dado.jogos.length > 0 ? `<h3>Jogos Notáveis</h3><ul>${dado.jogos.map(jogo => `<li><strong>${jogo.nome} (${jogo.ano}):</strong> ${jogo.descricao}</li>`).join('')}</ul>` : '';

        article.innerHTML = `
            <div class="card-header">
                <h2>${dado.empresa}</h2>
            </div>
            <div class="card-content">
                <p><strong>Fundação:</strong> ${dado.data_criacao} | <strong>Sede:</strong> ${dado.sede}</p>
                <p><strong>Fundadores:</strong> ${dado.fundadores.join(', ')}</p>
                <p>${dado.revolucao}</p>
                ${jogosHtml}
                <p class="website-link">
                    <a href="${dado.website}" target="_blank" rel="noopener noreferrer">Visitar Site Oficial</a>
                </p>
            </div>
        `;

        if (dado.cores) {
            article.style.setProperty('--cor-principal', dado.cores.principal);
            article.style.setProperty('--cor-texto-titulo', dado.cores.texto);
        }

        cardContainer.appendChild(article);
    }

}

async function carregarDados() {
    try {
        const resposta = await fetch("dados.json");
        dados = await resposta.json();
        renderizarCards(dados); 
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        cardContainer.innerHTML = "<p>Não foi possível carregar os dados. Tente novamente mais tarde.</p>";
    }
}


carregarDados();
