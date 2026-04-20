document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('feedbackModal');
    const closeBtn = document.getElementById('closeModalBtn');

    const showModal = () => {
        modal.style.display = 'flex';
    };

    setTimeout(showModal, 60000);

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
