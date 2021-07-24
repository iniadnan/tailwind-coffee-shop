// BUTTON: BUY NOW
document.querySelector('#nav-bottom-buy button').addEventListener('click', function() {
    document.querySelector('#detail-buy').classList.remove('hidden');
});

// CLOSE MODAL DETAIL
document.querySelector('#detail-buy #close-modal-detail').addEventListener('click', function() {
    document.querySelector('#detail-buy').classList.add('hidden');
});

// OPEN MODAL CONGRATULATION
document.querySelector('#detail-buy #buy-now-modal').addEventListener('click', function() {
    document.querySelector('#detail-buy').classList.add('hidden');
    document.querySelector('#detail-congratulation').classList.remove('hidden');
});