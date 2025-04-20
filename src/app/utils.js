const buttons = Array.from(document.querySelectorAll('.button-copy'));

function handleCopy(e) {
    const textToCopy = e.target.attributes[0].value;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const button = e.target;
        button.innerText = 'Copied!';
        button.style.backgroundColor = '#008000'; // Green background
        
        setTimeout(() => {
            button.innerText = 'Copy';
            button.style.backgroundColor = '#06d806'; // Green background
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

for (const btn of buttons) {
    btn.addEventListener('click', handleCopy);
}
