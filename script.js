let cardContainer = document.querySelector(".card-container");
let dados = [];
const searchInput = document.getElementById('search-input');
let criterioAtual = 'nome';
let filtroDecadaAtual = 'all';

document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-btn');
    const backToTopBtn = document.getElementById('back-to-top');

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

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function buscar(event) {
    if (event && event.type === 'submit') {
        event.preventDefault();
    }
    atualizarVisualizacao();
}

function ordenar(criterio, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (!btn.classList.contains('filter-btn-decade')) {
            btn.classList.remove('active');
        }
    });
    if(btnElement) btnElement.classList.add('active');

    criterioAtual = criterio;
    atualizarVisualizacao();
}

function filtrarPorDecada(decada, btnElement) {
    document.querySelectorAll('.filter-btn-decade').forEach(btn => btn.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
    
    filtroDecadaAtual = decada;
    atualizarVisualizacao();
}

function atualizarVisualizacao() {
    let resultado = [...dados];

    if (filtroDecadaAtual !== 'all') {
        if (filtroDecadaAtual === 'pre-80') {
            resultado = resultado.filter(d => d.data_criacao < 1980);
        } else if (filtroDecadaAtual === '2010+') {
             resultado = resultado.filter(d => d.data_criacao >= 2010);
        } else {
            const min = parseInt(filtroDecadaAtual);
            const max = min + 9;
            resultado = resultado.filter(d => d.data_criacao >= min && d.data_criacao <= max);
        }
    }

    const termoBusca = searchInput.value.toLowerCase();
    if (termoBusca.trim() !== '') {
        resultado = resultado.filter(d => d.empresa.toLowerCase().includes(termoBusca));
    }

    if (criterioAtual === 'nome') {
        resultado.sort((a, b) => a.empresa.localeCompare(b.empresa));
    } else if (criterioAtual === 'ano') {
        resultado.sort((a, b) => a.data_criacao - b.data_criacao);
    }

    renderizarCards(resultado);
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
        
        article.id = dado.empresa.replace(/\s+/g, '-').toLowerCase();

        const jogosHtml = dado.jogos && dado.jogos.length > 0 ? 
            `<details>
                <summary>ARQUIVOS DE PROJETOS [EXPANDIR]</summary>
                <ul>${dado.jogos.map(jogo => `<li><strong>${jogo.nome} (${jogo.ano}):</strong> ${jogo.descricao}</li>`).join('')}</ul>
            </details>` : '';

        article.innerHTML = `
            <div class="card-header">
                <div class="header-top">
                    <span class="sys-id">ID: ${dado.empresa.substring(0,3).toUpperCase()}-${dado.data_criacao}</span>
                    <span class="card-badge">EST. ${dado.data_criacao}</span>
                </div>
                <h2>${dado.empresa}</h2>
            </div>
            <div class="card-body">
                <div class="data-grid">
                    <div class="data-point">
                        <span class="label">ORIGIN POINT</span>
                        <span class="value">${dado.sede}</span>
                    </div>
                    <div class="data-point">
                        <span class="label">ARCHITECTS</span>
                        <span class="value">${dado.fundadores.join(', ')}</span>
                    </div>
                </div>
                
                <div class="impact-section">
                    <span class="label">SYSTEM IMPACT // REVOLUTION</span>
                    <p class="impact-text">${dado.revolucao}</p>
                </div>

                ${jogosHtml}
            </div>
            <div class="card-footer">
                <div class="status-light"></div>
                <a href="${dado.website}" target="_blank" class="access-btn">ACCESS MAINFRAME</a>
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

function renderizarTimeline() {
    const track = document.getElementById('timeline-track');
    if (!track) return;
    
    const sorted = [...dados].sort((a, b) => a.data_criacao - b.data_criacao);
    
    track.innerHTML = sorted.map(d => `
        <div class="timeline-entry" onclick="scrollToCard('${d.empresa.replace(/\s+/g, '-').toLowerCase()}')">
            <div class="timeline-year">${d.data_criacao}</div>
            <div class="timeline-dot" style="border-color: ${d.cores ? d.cores.principal : 'var(--text-muted)'}; box-shadow: 0 0 5px ${d.cores ? d.cores.principal : 'transparent'}"></div>
            <div class="timeline-name">${d.empresa}</div>
        </div>
    `).join('');
}

function scrollToCard(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.boxShadow = "0 0 30px var(--accent-color)";
        setTimeout(() => el.style.boxShadow = "", 1000);
    }
}

async function carregarDados() {
    try {
        const resposta = await fetch("dados.json");
        dados = await resposta.json();
        renderizarTimeline();
        atualizarVisualizacao();
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        cardContainer.innerHTML = "<p>Não foi possível carregar os dados. Tente novamente mais tarde.</p>";
    }
}

carregarDados();
