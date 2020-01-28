export const sixteenBitSignedToDisplay = (value) => {
  let V = value;
  if (V >= 2 ** 15) {
    V -= (2 ** 16);
  }
  V /= 10;
  return V;
};

export const displayToSixteenBitSigned = (value) => {
  let V = Math.trunc(value * 10);
  if (V < 0) {
    V += (2 ** 16);
  }
  return V;
};

export const divide = (value, factor) => value / factor;
export const mulitply = (value, factor) => value / factor;

export const lengthValueToDisplay = (value) => Math.trunc((value + 8) / 16);
export const displayToLengthValue = (value) => Math.trunc((value * 16) + 7);
