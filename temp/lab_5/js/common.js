document.getElementById('schedule-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const days = parseInt(document.getElementById('days').value);
    const maxLessons = parseInt(document.getElementById('maxLessons').value);

    localStorage.setItem('scheduleParams', JSON.stringify({ days, maxLessons }));

    generateSchedule(days, maxLessons);
});

function generateSchedule(days, maxLessons) {
    const container = document.getElementById('schedule-container');
    container.innerHTML = '';

    const table = document.createElement('table');
    table.className = 'schedule-container__table';
    const headerRow = table.insertRow();
    headerRow.className = 'schedule-container__header-row';

    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 0; i < days; i++) {
        const th = document.createElement('th');
        th.className = 'schedule-container__header';
        th.textContent = dayNames[i];
        headerRow.appendChild(th);
    }

    const subjects = ['Math', 'Science', 'History', 'Art', 'Physical Education', 'Music', 'English'];

    function getRandomSubject() {
        return subjects[Math.floor(Math.random() * subjects.length)];
    }

    for (let i = 0; i < maxLessons; i++) {
        const row = table.insertRow();
        row.className = 'schedule-container__row';
        for (let j = 0; j < days; j++) {
            const cell = row.insertCell();
            cell.className = 'schedule-container__cell';
            cell.textContent = getRandomSubject();
        }
    }

    container.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedParams = JSON.parse(localStorage.getItem('scheduleParams'));
    if (savedParams) {
        document.getElementById('days').value = savedParams.days;
        document.getElementById('maxLessons').value = savedParams.maxLessons;
        generateSchedule(savedParams.days, savedParams.maxLessons);
    }
});
