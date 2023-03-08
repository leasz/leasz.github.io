console.log("Funcionando");

// REFERENCIA DATOS DEL JSON
// results: Array(1)
// 		0: 
// 			cell: "(806) 654-5445"
// 			dob: {date: '1976-03-11T16:38:33.456Z', age: 46}
// 			email: "edith.powell@example.com"
// 			gender: "female"
// 			id: {name: 'SSN', value: '460-44-8911'}
// 			location: {street: {…}, city: 'Costa Mesa', state: 'Maine', country: 'United States', postcode: 12733, …}
// 			login: {uuid: '4b4af235-0bc9-4d54-9be2-2e813d87b55e', username: 'blackcat936', password: 'texas', salt: 'QWM2usMS', md5: '04e6370f7a394ebc0f7b39d603e56b59', …}
// 			name: {title: 'Miss', first: 'Edith', last: 'Powell'}
// 			nat: "US"
// 			phone: "(854) 733-9784"
// 			picture: {large: 'https://randomuser.me/api/portraits/women/20.jpg', medium: 'https://randomuser.me/api/portraits/med/women/20.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'}
// 			registered: {date: '2004-02-03T14:48:48.048Z', age: 19}


// UTILIZAMOS FETCH A RANDOMUSER PARA OBTENER DATOS ALEATORIOS
fetch('https://randomuser.me/api/')

    // CONVIERTE LA RESPUESTA DE LA URL EN FORMATO JSON
    .then(response => response.json())

    // PASAMOS LOS DATOS A UNA NUEVA FUNCION DONDE MANEJAREMOS LOS MISMOS
    .then(data => { 
                    console.log("Iniciando funcion nuevaPersona");
                    nuevaPersona(data);
                })

// CREAMOS LA FUNCION DONDE MANEJAREMOS LOS DATOS DEL JSON                
function nuevaPersona(data) {
    
    // GUARDAMOS EN UNA CONSTANTE EL OBJETO CON LOS DATOS DEL JSON
    const data_persona = data.results[0];

    // // CREAMOS UN NUEVO OBJETO SOLO CON LOS DATOS QUE UTILIZAREMOS
    const persona = {
        foto: data_persona.picture.large,
        nombre: `${data_persona.name.first} ${data_persona.name.last}`, 
        direccion: `${data_persona.location.street.name} ${data_persona.location.street.number} CP: ${data_persona.location.postcode}, ${data_persona.location.state}`,
        email: data_persona.email, 
        numero: data_persona.cell, 
        edad: data_persona.dob.age, 
        nacionalidad: data_persona.nat
    };

    // MOSTRAMOS LOS DATOS OBTENIDOS EN CONSOLA COMO REFERENCIA
    console.log("Nombre: " + persona.nombre);
    console.log("Direccion "+ persona.direccion);
    console.log("Email: " + persona.email);
    console.log("Numero celular: " + persona.numero);
    console.log("Edad: " + persona.edad);
    console.log("Nacionalidad: " + persona.nacionalidad);
    console.log(persona);

    // TOMAMOS EL DIV CON ID "FOTO PERFIL" Y LE AGREGAMOS LA ETIQUETA IMG CON LOS VALORS TRAIDOS POR FETCH 
    const avatar = document.getElementById('foto_perfil');
    avatar.innerHTML = `<img src="${persona.foto}" alt="${persona.nombre}" >`;

    // IMPRIMIMOS EL NOMBRE EN LA ETIQUETA P
    const datos = document.getElementById('datos_persona');
    datos.innerHTML = `<h5>${persona.nombre}</h5>`;

    // GENERAMOS LA LISTA DESORDENADA CON LOS DATOS OBTENIDOS
    const p_direccion = document.getElementById('persona_direccion');
    p_direccion.innerHTML += `${persona.direccion}`;
    const p_email = document.getElementById('persona_email');
    p_email.innerHTML += `<a href = "mailto:${persona.email}">${persona.email}</a>`;
    const p_telefono = document.getElementById('persona_telefono');
    p_telefono.innerHTML += `${persona.numero}`;
    const p_edad = document.getElementById('persona_edad');
    p_edad.innerHTML += `${persona.edad}`;
    const p_nacionalidad = document.getElementById('persona_nacionalidad');
    p_nacionalidad.innerHTML += `${persona.nacionalidad}`;    

}


