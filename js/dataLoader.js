(function() {
    const movieListElement = document.querySelector('.movie-list');
    const preloader = document.createElement('div');
    preloader.classList.add('preloader');
    preloader.textContent = 'Loading...';
    movieListElement.appendChild(preloader);

    function fetchMovies() {
        const url = `https://jsonplaceholder.typicode.com/users`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                renderMovies(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                displayError();
            })
            .finally(() => {
                preloader.remove();
            });
    }

    function renderMovies(users) {
        movieListElement.innerHTML = '';
        users.forEach(user => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');

            movieDiv.innerHTML = `
                <h4 class="movie__title">${user.name}</h4>
                <article class="movie__info">
                    Email: ${user.email}<br>
                    Phone: ${user.phone}<br>
                    Company: ${user.company.name}
                </article>
            `;
            movieListElement.appendChild(movieDiv);
        });
    }

    function displayError() {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = '⚠ Что-то пошло не так.';
        errorDiv.style.color = 'red';
        movieListElement.appendChild(errorDiv);
    }

    window.addEventListener('load', fetchMovies);
})();