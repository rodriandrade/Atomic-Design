const Color = require('color');
export const colores = {
  blanco: Color.rgb(255, 255, 255),
  negro: Color.rgb(35, 35, 35),
  negro2: Color.rgb(7, 7, 7),
  gris: Color.rgb(99, 99, 99),
  azul: Color.rgb(30, 3, 88),
  verde: Color.rgb(104, 244, 219)
};
export const leerColor = (color) => color.hsl().string();