const juegos = {
    aguila: 0,
    sol: 1,
    tirarMoneda: function () {
        const numeroAleatorio = Math.floor(Math.random() * 2);
        console.log(
            numeroAleatorio === this.aguila ? "Cae águila 🦅" : "Cae sol 🌞"
        );
    },
};

for (let tiros = 0; tiros < 10; tiros++) {
    juegos.tirarMoneda();
}