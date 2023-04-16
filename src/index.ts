console.log("Hola mundo...");
const form = document.getElementById('form') as HTMLFormElement;
const btnRegistrar = document.getElementById('btnRegistro') as HTMLButtonElement;

btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log("Ingreso a la validacion del formulario");
    
    //Validacion del formulario

    //Obtener valores
    const tipoDocumento = document.getElementById('tipoDocumento') as HTMLInputElement;
    const numeroIdentificacion = document.getElementById('numeroIdentificacion') as HTMLInputElement;
    const nombre = document.getElementById('nombres') as HTMLInputElement;
    const apellido = document.getElementById('apellidos') as HTMLInputElement;
    const numeroCelular = document.getElementById('celular') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;

    //console.log(tipoDocumento.value);
    

})

