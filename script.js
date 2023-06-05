const textBox=document.getElementById("evaluatedText");
const tag=document.getElementById("letterCount");

textBox.addEventListener('input',countNumber);
function countNumber() {
	const textValue=textBox.value;
	const length=textValue.length;
	tag.textContent =length;
}

countNumber();