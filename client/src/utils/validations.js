export default function validations(data) {
  let errors = {};
  const regexName = /^[A-Za-z\s]+$/;

  //tratamiento del name/nombre de la raza
  if (!data.name) {
    errors.name = "Ingresa un nombre de raza";
  } else {
    if (data.name.trim() === "") {
      errors.name = "No uses cadenas de espacios";
    } else {
      if (data.name.length < 3 || data.name.length > 25)
        errors.name = "Raza entre 3 y 25 caracteres";
      if (!regexName.test(data.name))
        errors.name = "Usa solo letras y espacios";
    }
  }

  //tratamiento de las alturas
  if (!data.heightMin || !data.heightMax) {
    errors.height = "Ingresa las alturas";
  } else {
    if (Number(data.heightMin) <= 0 || Number(data.heightMax) <= 0) {
      errors.height = "La altura debe ser mayor que cero";
    } else {
      if (Number(data.heightMin) >= Number(data.heightMax)) {
        errors.height = "La altura Max debe superar a la Min";
      } else {
        if (Number(data.heightMin) > 50 || Number(data.heightMax) > 120) {
          errors.height = "Min hasta 50 y Max hasta a 120";
        }
      }
    }
  }

  //tratamiento del peso
  if (!data.weightMin || !data.weightMax) {
    errors.weight = "Ingresa valores para el peso";
  } else {
    if (Number(data.weightMin) <= 0 || Number(data.weightMax) <= 0) {
      errors.weight = "El peso debe ser mayor que cero";
    } else {
      if (Number(data.weightMin) >= Number(data.weightMax)) {
        errors.weight = "El peso Max debe superar al Min";
      } else {
        if (Number(data.weightMin) > 40 || Number(data.weightMax) > 90) {
          errors.weight = "Min hasta 40 y max hasta 90";
        }
      }
    }
  }

  //tratamiento de los anos de vida
  if (!data.lifeMin || !data.lifeMax) {
    errors.life = "Ingresa expectativa de vida";
  } else {
    if (Number(data.lifeMin) <= 0 || Number(data.lifeMax) <= 0) {
      errors.life = "La edad debe ser mayor que cero";
    } else {
      if (Number(data.lifeMin) >= Number(data.lifeMax)) {
        errors.life = "La edad Max debe superar a la Min";
      } else {
        if (Number(data.lifeMin) > 15 || Number(data.lifeMax) > 20) {
          errors.life = "Min hasta 15 y Max hasta 20";
        }
      }
    }
  }

  if (!data.image) errors.image = "Selecciona una imagen";

  if (data.selectedTemperaments.length === 0)
    errors.selectedTemperaments = "Selecciona al menos un temperamento";

  return errors;
}
