'use strict';

const allInputs = document.querySelectorAll('input');

allInputs.forEach((element) => {
  const labelName = document.createElement('label');

  const elName = element.name.replace(/([a-z])([A-Z])/g, '$1 $2');
  const formatedName = elName.replace(
    /(\w)(\w+)/,
    (match, p1, p2) => p1.toUpperCase() + p2,
  );

  element.setAttribute('placeholder', formatedName);

  labelName.textContent = formatedName;
  labelName.setAttribute('for', element.id);
  labelName.setAttribute('class', 'field-label');
  element.before(labelName);
});
