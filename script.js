```javascript
function calcular() {

    let animais =
        Number(document.getElementById("animais").value);

    let economia = animais * 15;

    document.getElementById("resultado").innerHTML =
        "Economia estimada: R$ " +
        economia.toFixed(2) +
        " por mês.";
}
```
