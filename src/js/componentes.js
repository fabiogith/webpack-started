import '../css/componentes.css'
import imgWebPack from '../assets/img/webpack-logo.png'
const saludar = (nombre) =>{
    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!`;

    document.body.append(h1);

    const img = document.createElement('img');
    img.src = imgWebPack;
    img.className ='imgLogo';

    document.body.append(img);
}

export{
    saludar
}