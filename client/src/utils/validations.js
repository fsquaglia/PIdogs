export default function validations(data) {
  let errors = {};

  if (!data.name) {
    errors.name = "Ingresa un nombre de raza";
  } else {
    if (data.name.length < 3 || data.name.length > 35)
      errors.name = "Raza entre 3 y 35 caracteres";
    if (/\d/.test(data.name)) errors.name = "No uses números en el nombre";
  }

  if (!data.heightMin || !data.heightMax) {
    errors.height = "Ingresa las alturas";
  } else {
    if (Number(data.heightMin) <= 0 || Number(data.heightMax) <= 0) {
      errors.height = "Las alturas no pueden ser igual a cero";
    } else {
      if (Number(data.heightMin) > Number(data.heightMax)) {
        errors.height = "La altura Max debe superar a la Min";
      }
    }
  }

  if (!data.weightMin || !data.weightMax) {
    errors.weight = "Ingresa valores para el peso";
  } else {
    if (Number(data.weightMin) <= 0 || Number(data.weightMax) <= 0) {
      errors.weight = "El peso debe ser mayor que cero";
    } else {
      if (Number(data.weightMin) > Number(data.weightMax)) {
        errors.weight = "El peso Max debe superar al Min";
      }
    }
  }

  if (!data.lifeMin || !data.lifeMax) {
    errors.life = "Ingresa expectativa de vida";
  } else {
    if (Number(data.lifeMin) <= 0 || Number(data.lifeMax) <= 0) {
      errors.life = "La edad debe ser mayor que cero";
    } else {
      if (Number(data.lifeMin) > Number(data.lifeMax)) {
        errors.life = "La edad Max debe superar a la Min";
      }
    }
  }

  if (!data.image) errors.image = "Selecciona una imagen";

  if (data.selectedTemperaments.length === 0)
    errors.selectedTemperaments = "Selecciona al menos un temperamento";

  return errors;
}
