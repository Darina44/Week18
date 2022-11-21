// let errors = [];
// function checkValidity(input) {
//     let validity = input.validity;
//     if (validity.valueMissing) {errors.push('Поле ' + input.placeholder + ' не заполнено'); }
//     if (validity.patternMismatch) {errors.push('Неверный формат заполнения'); }
//     if (validity.rangeOverFlow) {let max = getAttributeValue(input, 'max'); errors.push('Максимальное значение не может быть больше чем ' + max); }
//     if (validity.rangeUnderFlow) {let min = getAttributeValue(input, 'min'); errors.push('Минимальное значение не может быть меньше чем ' + min); }
// } 

// function checkAll() {
//     errors = [];
//     let inputs = document.querySelectorAll("input");

//     for (let input of inputs) {
//         checkValidity(input);
//     }

//     document.getElementById('errorsInfo').innerHTML=errors.join('. <br>');
// }


document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById("author").value = name;
    }
});

function sendMessage(author, comment) {
    document.getElementById("chat").innerHTML += `<span class='author'>${author}: </span><span>${comment}</span><br>`;
}

function checkMessage() {
    let author = document.getElementById("author").value;
    let comment = document.getElementById("comment").value;

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }

    sendMessage(author, comment);
}