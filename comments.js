const URL = 'https://jsonplaceholder.typicode.com/posts/23/comments';
const listElement = document.getElementById('comments-list');
const loader = document.getElementById('loader');
const modal = document.getElementById('modalOverlay');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

async function loadComments() {
    if (listElement.children.length > 0) return;

    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Помилка мережі');
        
        const comments = await response.json();
        loader.style.display = 'none';

        comments.forEach(comment => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${comment.name}</strong> <small style="color: #666;">(${comment.email})</small>
                <p style="margin-top: 8px;">${comment.body}</p>
            `;
            listElement.appendChild(li);
        });
    } catch (error) {
        loader.innerText = 'Не вдалося завантажити відгуки.';
        console.error('Fetch error:', error);
    }
}

openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    loadComments();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});