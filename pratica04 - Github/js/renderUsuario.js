const userPicture = document.querySelector('.user-picture>img');
const userName = document.querySelector('.user-name');
const userLogin = document.querySelector('.user-login');
const userJoined = document.querySelector('.user-joined');
const userWorksAt = document.querySelector('.user-works-at');
const profileOnGithub = document.querySelector('.profile-on-github');

const reposElement = document.querySelector('.repos');

const renderUsuario = () => {
    userPicture.src = user.avatar_url;

    userName.textContent = user.name;
    userLogin.textContent = user.login;
    userJoined.textContent = `Entrou em ${new Date(user.created_at).toLocaleDateString()}`;
    userWorksAt.textContent = user.company ? `Trabalha em ${user.company}` : 'Não trabalha em nenhuma empresa';
    profileOnGithub.href = user.html_url;
    profileOnGithub.textContent = `Perfil no GitHub`;

    renderRepos();
}



const renderRepos = async () => {
    const repos = await fetch(`https://api.github.com/users/${user.login}/repos`).then(response => response.json());

    repos.slice(2).map(repo => {
        const repoElement = document.createElement('div');

        repoElement.innerHTML = `
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <span>Estrelas: ${repo.stargazers_count}</span>
        <span>Forks: ${repo.forks_count}</span>
        <span>Issues: ${repo.open_issues_count}</span>
        <span>Criado em: ${new Date(repo.created_at).toLocaleDateString()}</span>
        <span>Linguagem: ${repo.language}</span>
        <span>ID: ${repo.id}</span>
        `;

        reposElement.appendChild(repoElement);
    })
    
}