document.getElementById('fetchRepos').addEventListener('click', function() {
    let username = document.getElementById('username').value;
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            const repoList = document.getElementById('repoList');
            repoList.innerHTML = '<h3>Repositories:</h3>';
            data.forEach(repo => {
                repoList.innerHTML += `<p><a href="${repo.html_url}" target="_blank">${repo.name}</a></p>`;
            });
        })
        .catch(error => console.error('Error:', error));
});
