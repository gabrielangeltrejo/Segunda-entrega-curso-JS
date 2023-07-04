  for (let i = 0; i < 100; i++){
  let numeroMagico = parseInt(
    prompt("Ingrese un número del 0 al 10 y proba si entendes la referencia")
  );

let numMagic = (dato) => {
  let opciones = [
    "Y si te lo pide Roman?",
    "Oportuncrisis!!",
    "Va en contramano Rosalía",
    "Clarita la cuenta",
    "Usted no puede decir semejante barbaridad",
    "Miameeeee",
    "Cutucutillo",
    "Anda pa´ ya b#b@",
    "Messirve",
    "No me quemes",
    "Intenta otra vez",
  ];
  if (numeroMagico >= 0 && numeroMagico <= 10) {
    return alert(opciones[dato]);
  } else {
    alert("No es por ahi rey");
  }
};

numMagic(numeroMagico);
  }