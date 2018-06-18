document.getElementById('gray-button').onclick = switchGray;
document.getElementById('white-button').onclick = switchWhite;

function switchGray() {
	document.body.style.backgroundColor = 'gray';
	document.body.style.color = 'white';
	document.getElementById('active-color-text').innerHTML = 'Gray';
}

function switchWhite() {
	document.body.style.backgroundColor = 'white';
	document.body.style.color = 'black';
	document.getElementById('active-color-text').innerHTML = 'White';
}
