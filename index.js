let a = 0;
if (a === 0) {
    document.querySelector('.pressed').click();
}

document.querySelector('.wordpress').addEventListener('click', () => {
    document.querySelector('.all').style.visibility = 'hidden';
    a = 1;
});

document.querySelector('.pressed').addEventListener('click', () => {
    document.querySelector('.all').style.visibility = 'visible';
});