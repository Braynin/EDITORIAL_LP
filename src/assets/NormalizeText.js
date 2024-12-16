const normalizeText = (text) => {
  const textoNormalizado = String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  return textoNormalizado;
};

export default normalizeText;
