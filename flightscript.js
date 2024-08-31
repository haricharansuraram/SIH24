// Swap functionality for 'From' and 'To' fields
document.querySelector('.swap').addEventListener('click', () => {
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    document.getElementById('from').value = to;
    document.getElementById('to').value = from;
});
