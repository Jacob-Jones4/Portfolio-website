const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const year = document.getElementById('year');

menu?.addEventListener('click', () => {
    nav?.classList.toggle('open');
});

document.querySelectorAll('.nav nav a').forEach((link) => {
    link.addEventListener('click', () => {
        nav?.classList.remove('open');
    });
});

if (year) {
    year.textContent = new Date().getFullYear();
}

const filterButtons = document.querySelectorAll('.filter');
const workCards = document.querySelectorAll('.work-card[data-category]');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove('active');
        });

        button.classList.add('active');

        const selectedFilter = button.dataset.filter;

        workCards.forEach((card) => {
            const categories = (card.dataset.category || '')
                .split(' ')
                .filter(Boolean);

            const shouldShow =
                selectedFilter === 'all' ||
                categories.includes(selectedFilter);

            card.style.display = shouldShow ? 'flex' : 'none';
        });
    });
});
