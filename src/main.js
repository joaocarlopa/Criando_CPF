import GeraCPF from './modules/geraCPF';
import './assets/css/style.css';

let num = document.querySelector('.num')

let x = 5;
let y = 5;

let add_lista = document.querySelector('.lista');


let num_x = 0;



setInterval(() => {

    if (x > 0) {
        x--
        num.innerHTML = x;
    }

}, 1000);



setInterval(() => {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCPf();
    add_lista.innerHTML = `<p class='teste'>N°: ${num_x++} - ${cpfGerado.innerText} <button class='remove'>remover</button></p>`;
    const btn_del = document.querySelector('.remove');
    btn_del.onclick = function () {
        add_lista.innerText = '';
    }
}, 5000);
