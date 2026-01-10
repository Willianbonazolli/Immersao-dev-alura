let cardContainer = document.querySelector(".card-container");
let dados = [];
const searchInput = document.getElementById('search-input');

document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-btn');

    document.body.classList.add('no-scroll');

    enterBtn.addEventListener('click', () => {
        splashScreen.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });

    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    searchInput.addEventListener('input', buscar);
});

function buscar(event) {
    if (event && event.type === 'submit') {
        event.preventDefault();
    }
    const termoBusca = searchInput.value.toLowerCase();

    if (termoBusca.trim() === '') {
        renderizarCards(dados); 
    }

    const dadosFiltrados = dados.filter(dado => {
        return dado.empresa.toLowerCase().includes(termoBusca);
    });

    renderizarCards(dadosFiltrados);
}

function ordenar(criterio, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');

    let dadosOrdenados = [...dados];

    if (criterio === 'nome') {
        dadosOrdenados.sort((a, b) => a.empresa.localeCompare(b.empresa));
    } else if (criterio === 'ano') {
        dadosOrdenados.sort((a, b) => a.data_criacao - b.data_criacao);
    }

    const termoBusca = searchInput.value.toLowerCase();
    if (termoBusca) {
        dadosOrdenados = dadosOrdenados.filter(d => d.empresa.toLowerCase().includes(termoBusca));
    }

    renderizarCards(dadosOrdenados);
}

function renderizarCards(dadosParaRenderizar){
    cardContainer.innerHTML = "";

    if (dadosParaRenderizar.length === 0) {
        const noResultsMessage = `<p class="no-results-message"><strong>Nenhum resultado encontrado para a sua busca.</strong></p>`;
        cardContainer.innerHTML = noResultsMessage;
        return;
    }

    let index = 0;
    for (let dado of dadosParaRenderizar) {
        let article = document.createElement("article");
        article.classList.add("card");

        const jogosHtml = dado.jogos && dado.jogos.length > 0 ? 
            `<details>
                <summary>Jogos Notáveis</summary>
                <ul>${dado.jogos.map(jogo => `<li><strong>${jogo.nome} (${jogo.ano}):</strong> ${jogo.descricao}</li>`).join('')}</ul>
            </details>` : '';

        article.innerHTML = `
            <div class="card-header">
                <h2>${dado.empresa}</h2>
                <span class="card-badge">${dado.data_criacao}</span>
            </div>
            <div class="card-content">
                <div class="card-meta">
                    <div class="meta-item">
                        <span class="meta-label">Sede</span>
                        <span class="meta-value">${dado.sede}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Fundadores</span>
                        <span class="meta-value">${dado.fundadores.join(', ')}</span>
                    </div>
                </div>
                <p class="card-desc">${dado.revolucao}</p>
                ${jogosHtml}
            </div>
            <div class="card-footer">
                <a href="${dado.website}" target="_blank" rel="noopener noreferrer">Acessar Terminal ></a>
            </div>
        `;

        if (dado.cores) {
            article.style.setProperty('--cor-principal', dado.cores.principal);
            article.style.setProperty('--cor-texto-titulo', dado.cores.texto);
        }

        article.style.animationDelay = `${index * 0.1}s`;
        index++;

        cardContainer.appendChild(article);
    }

}

async function carregarDados() {
    try {
        const resposta = await fetch("dados.json");
        dados = await resposta.json();
        ordenar('nome', document.querySelector('.filter-btn')); 
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        cardContainer.innerHTML = "<p>Não foi possível carregar os dados. Tente novamente mais tarde.</p>";
    }
}


carregarDados();
