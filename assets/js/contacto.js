const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('.contacto__formulario input');
const textTarea = document.querySelector('#mensaje');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,50}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	textTarea: /^.{5,300}$/ // 5 a 300 digitos.
};

let campos = {
	nombre: false,
	correo: false,
	telefono: false,
	mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, "correo");
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, "telefono");
			break;
		case "mensaje":
			if (e.target.value.length > 0 && e.target.value.length < 300) {
				console.log(e)
				document.querySelector("#mensaje").classList.remove("contacto__input-textarea-incorrecto");
				document.querySelector("#mensaje").classList.add("contacto__input-textarea-correcto");
				document.querySelector(".contacto__mensaje-error").classList.remove("contacto__input-error-activo");
				campos["mensaje"] = true;

			} else {
				document.querySelector("#mensaje").classList.remove("contacto__input-textarea-correcto");
				document.querySelector("#mensaje").classList.add("contacto__input-textarea-incorrecto");
				document.querySelector(".contacto__mensaje-error").classList.add("contacto__input-error-activo");
				campos["mensaje"] = false;
			}
			break;
		default:
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		console.log("si")
		document.querySelector(`#contacto__grupo-${campo}`).classList.remove("contacto__formulario-incorrecto");
		document.querySelector(`#contacto__grupo-${campo}`).classList.add("contacto__formulario-correcto");
		document.querySelector(`.contacto__${campo}-error`).classList.remove("contacto__input-error-activo");
		campos[campo] = true;
	} else {
		console.log("no")
		document.querySelector(`#contacto__grupo-${campo}`).classList.add("contacto__formulario-incorrecto");
		document.querySelector(`#contacto__grupo-${campo}`).classList.remove("contacto__formulario-correcto");
		document.querySelector(`.contacto__${campo}-error`).classList.add("contacto__input-error-activo");
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario)
});
textTarea.addEventListener("keyup", validarFormulario);
textTarea.addEventListener("blur", validarFormulario);


formulario.addEventListener("submit", (e) => {
	e.preventDefault();

	if (campos.nombre && campos.telefono && campos.telefono && campos.mensaje) {
		formulario.reset();
		document.querySelector(".contacto__mensaje-exito").setAttribute("style", "display: block")
		setTimeout(() => {
			document.querySelector(".contacto__mensaje-exito").setAttribute("style", "display: none")
		}, 3000);
		document.querySelector("#mensaje").classList.remove("contacto__input-textarea-correcto");
		document.querySelector(`#contacto__grupo-nombre`).classList.remove("contacto__formulario-correcto");
		document.querySelector(`#contacto__grupo-telefono`).classList.remove("contacto__formulario-correcto");
		document.querySelector(`#contacto__grupo-correo`).classList.remove("contacto__formulario-correcto");
	} else {
		document.querySelector(".contacto__mensaje-camposFaltantes").setAttribute("style", "display: block")
		setTimeout(() => {
		document.querySelector(".contacto__mensaje-camposFaltantes").setAttribute("style", "display: none")
		}, 3000)
	}

	campos = {
		nombre: false,
		correo: false,
		telefono: false,
		mensaje: false
	}
})


//quiero captar el evento en el text tarea. Creo la variable Texttarea



