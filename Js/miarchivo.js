class Ropa {
    constructor (producto, marca,  tamaño, precioSiniva,){
    this.producto = producto;
    this.marca = marca;
    this.tamaño = tamaño;
    this.precioSiniva = precioSiniva;
    this.contador = 0;
    }
}

const prenda = [];
prenda.push (new Ropa ("Zapatillas de Correr", "Asics", "42", 200 ));
prenda.push (new Ropa ("Zapatillas de Crossfit", "Under Armour", "42", 280));
prenda.push (new Ropa ("Soga de Saltar", "Everlast", "2 mts", 140));
prenda.push (new Ropa ("Campera Rompeviento", "Adidas", "Large", 500));


const iva = 0.21;
let edad;
let subTotal = 0;
let totalConIva= 0;
let descuentoCompra = 0;
let opcion;
let itemsCompra =0;

const precio = prenda.map((precio) => {
    return precio.precioSiniva
});

const contadores = prenda.map ((contador) => {
    return contador.contador
});

const productos = prenda.map ((producto) => {
    return producto.preducto
});

const total = () => {
    totalConIva = subTotal * 1.21
    return totalConIva
};


const indumentaria = () => {
    opcion = Number ( prompt(`que prenda te gustaria comprar?:
    [1] Zapatillas de correr
    [2] Zapatillas de Crossfit
    [3] Soga de Saltar
    [4] Campera Rompe viento`));

    switch(opcion){
    case 1:
        subTotal = subTotal + precio [0];
        totalConIva = total();
        contadores[0] = contadores[0] +1;
        break;
    case 2:
        subTotal = subTotal + precio [1];
        totalConIva = total();
        contadores[1] = contadores[1] +1;
        break;
    case 3:
        subTotal = subTotal + precio [2];
        totalConIva = total();
        contadores[2] = contadores[2] +1;
        break;
    case 4:
        subTotal = subTotal + precio [3];
        totalConIva = total();
        contadores[3] = contadores[3] +1;
        break;
    
    default:
        alert(`opcion incorrecta!`);
        break;
    }
}

/*logica*/

let enter = confirm(`Bievenido a Hermes Running Shoes, compramos?:`);

if(enter){
    edad = Number( prompt(`Excelente pero primero que nada, ¿cuantos años tienes?: `));
    if((edad) >= 18){
        itemsCompra = Number( prompt(`cuantas prendas vas a comprar?`));
        for(let i= 0; i<itemsCompra; i++){
            indumentaria()
            
        }
        let compra =``
        for(let i = 0; i < contadores.length; i++){
            if((contadores[i]) !=0){
                compra = compra + `${contadores[i]} ${productos[i]}\n `
        }
        }
        
        alert(`el total de tu compra es ${totalConIva}`);
    } else{
        alert(`Lo siento, pero debes estar acompañado de un adulto para realizar gastos online`);
        
    }
} else { 
    alert(`Aqui estaremos por si deseas volver!!`);
}
