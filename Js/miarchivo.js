const zapaCorrer = 200;
const zapaCrossfit = 280;
const sogaSaltar = 140;
const camperaCorrer = 500;

const iva = 0.21;
let edad;

let subTotal = 0;
let totalConIva= 0;
let descuentoCompra = 0;
let opcion;
let itemsCompra =0;

/*Funciones*/
function indumentaria(){
    opcion = Number ( prompt(`que prenda te gustaria comprar?:
    [1] Zapatillas de correr
    [2] Zapatillas de Crossfit
    [3] Soga de Saltar
    [4] Campera Rompe viento`));

    switch(opcion){
    case 1:
        subTotal = subTotal + zapaCorrer;
        break;
    case 2:
        subTotal = subTotal + zapaCrossfit;
        break;
    case 3:
        subTotal = subTotal + sogaSaltar;
        break;
    case 4:
        subTotal = subTotal + camperaCorrer;
        break;
    
    default:
        alert(`opcion incorrecta!`);
        break;
    }
}
function total(){
    totalConIva = subTotal +  (subTotal*iva);
    return totalConIva
}
function descuento(){
    if(totalConIva >= 1000){
        descuentoCompra = totalConIva -(totalConIva*0.10);
    }
    return descuentoCompra
}

/*logica*/

let enter = confirm(`Bievenido a Hermes Running Shoes, compramos?:`);

if(enter){
    edad = Number( prompt(`Excelente pero primero que nada, ¿cuantos años tienes?: `));
    if((edad) >= 18){
        itemsCompra = Number( prompt(`cuantas prendas vas a comprar?`));
        for(let i= 0; i<itemsCompra; i++){
            indumentaria()
            total()
            descuento()
        }
        alert(`el total de tu compra es ${totalConIva} y tu total con descuento es ${descuentoCompra}`);
    } else{
        alert(`Lo siento, pero debes estar acompañado de un adulto para realizar gastos online`);
        
    }
} else { 
    alert(`Aqui estaremos por si deseas volver!!`);
}
