const compareUserName = (name, surname) => {
  const nameConrol = name ? name : '';
  const surnameConrol = surname ? surname : '';
  return `${nameConrol} ${surnameConrol}`;
};
export {compareUserName};
