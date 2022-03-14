let person = prompt("Ingresa tu nombre");
alert (`${person} bienvenido, evaluaremos si el valor de tus BTC es mayor a 1 millón de USD`);

portfolio = 0

while (portfolio<=1000000) {
    let btc = prompt(`ingresa la cantidad de BTC que tienes`)
    portfolio = btc*40000
    if (portfolio>=1000000) {
        document.write (`${person} tienes mas de un millón de USD. </br> El valor de tu portafolio es de ${portfolio} USD.`)
    }
    else {
        alert(`intentalo con una cantidad más grande`)
    }
}
