interface RegexLibrary {
  textOnly: RegExp;
  mail: RegExp;
  phone: RegExp;
  zipcode: RegExp;
}

export const regexLibrary: RegexLibrary = {
  textOnly: /[A-Za-z]/,
  mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/,
  zipcode: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
};
