//www.styled-components.com/docs/api#typescript

const fundamtals = {
  fontPrimay: 'sans-serif',
  textScaleRatio: 1.2,
  textBaseSize: '1em',
};

export const theme = {
  textXS: `calc(1em / (var(${fundamtals.textScaleRatio}) * var(${fundamtals.textScaleRatio})))`,
  // textSM: calc(1em / var(text-scale-ratio));
  // textMD: calc(1em * var(text-scale-ratio));
  // textLG: calc(1em * var(text-scale-ratio) * var(text-scale-ratio));
  // textXL: calc(1em * var(text-scale-ratio) * var(text-scale-ratio) * var(text-scale-ratio));
  // textXXL: calc(1em * var(text-scale-ratio) * var(text-scale-ratio) * var(text-scale-ratio) * var(text-scale-ratio));
  // textXXXL: calc(1em * var(text-scale-ratio) * var(text-scale-ratio) * var(text-scale-ratio) * var(text-scale-ratio) * var(text-scale-ratio));
};
