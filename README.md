# Calculadora con 4 funciones

---

Usar lo que hemos aprendido sobre:

* variables
* conditionales
* onclick

Y los siguientes fragmentos de código:

* `var displayDiv = document.querySelector("#display");`
* `displayDiv.innerText = "Some new value";`

Intenta construir una *calculadora con 4 funciones *desde cero.

Te proporcionaremos algo de HTML para que puedas comenzar. ¡Ve la demostración de trabajo incorporada a continuación!

### HTML para comenzar

```
<div id="calculator">
  <div id="display">0</div>
  <div class="row">
    <button onclick="press(7);">7</button>
    <button onclick="press(8);">8</button>
    <button onclick="press(9);">9</button>
    <button class="operator" onclick="setOP('/');">÷</button>
  </div>
  <div class="row">
    <button onclick="press(4);">4</button>
    <button onclick="press(5);">5</button>
    <button onclick="press(6);">6</button>
    <button class="operator" onclick="setOP('*');">×</button>
  </div>
  <div class="row">
    <button onclick="press(1);">1</button>
    <button onclick="press(2);">2</button>
    <button onclick="press(3);">3</button>
    <button class="operator" onclick="setOP('-');">−</button>
  </div>
  <div class="row">
    <button onclick="clr();">C</button>
    <button onclick="press(0);">0</button>
    <button onclick="press('.');">.</button>
    <button class="operator" onclick="setOP('+');">+</button>
  </div>
  <div class="row">
    <button id="equals" onclick="calculate()">=</div>
  </div>
<div>copy
```

### Demostración de trabajo:

<iframe src="https://codepen.io/wgoode3/full/pobBOzj" width="360px" height="400px"></iframe>
