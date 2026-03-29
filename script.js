// script.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // 모달 열기
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex'; // flexbox로 표시
    });

    // 모달 닫기
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 모달 바깥 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
