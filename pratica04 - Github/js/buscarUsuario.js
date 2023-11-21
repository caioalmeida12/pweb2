const searchInput = document.querySelector('.search>input');
const searchButton = document.querySelector('.search>button');

const buscarUsuario = async (e) => {
    e.preventDefault();

    searchButton.disabled = true;
    searchButton.textContent = 'Buscando...';

    const username = searchInput.value;

    const url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);

    const data = await response.json();

    searchButton.disabled = false;
    searchButton.textContent = 'Buscar';

    user = response.ok ? data : null;

    if (user) { renderUsuario() } else alert('Usuário não encontrado');
}

searchButton.addEventListener('click', buscarUsuario);
