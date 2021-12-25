const fieldCheck = (input) => {
  return input !== "";
};

export const checkAllFields = (fields) => {
  const valido = fields.every((field) => fieldCheck(field));

  return valido;
};

