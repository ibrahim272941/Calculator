const currentArea = document.getElementById('currentArea');
const previousArea = document.getElementById('previousArea');

document.getElementById('table').onclick = (e) => {
  if (e.target.className === 'number') {
    writingCurrentArea(e.target.innerText);
  } else if (e.target.className === 'operationButtons') {
    selectOperation(e.target.innerText);
  } else if (e.target.className === 'selector') {
    deleteCurrentArea(e.target.innerText);
  } else if (e.target.id === 'result') {
    result();
  }
};

const writingCurrentArea = (e) => {
  if (e === '.' && currentArea.innerText.includes('.')) return;
  if (e === '-' && currentArea.innerText.includes('-')) return;
  currentArea.innerText += e;
};

const deleteCurrentArea = (e) => {
  if (e === 'AC') {
    currentArea.innerText = '';
    previousArea.innerText = '';
  } else if (e === 'DEL') {
    currentArea.innerText = currentArea.innerText.slice(0, -1);
  }
};
const selectOperation = (e) => {
  if (currentArea.innerText === '') return;
  if (previousArea.innerText !== '') {
    calculate(e);
  }
  previousArea.innerText = currentArea.innerText + e;

  currentArea.innerText = '';
};

const calculate = (operation) => {
  const currentValue = parseFloat(currentArea.innerText);
  const previousValue = parseFloat(previousArea.innerText.slice(0, -1));
  console.log(currentValue);
  let calcValue;

  if (operation === '+') {
    calcValue = currentValue + previousValue;
  } else if (operation === '-') {
    calcValue = previousValue - currentValue;
  } else if (operation === 'x') {
    calcValue = currentValue * previousValue;
  } else if (operation === '/') {
    calcValue = previousValue / currentValue;
  }
  currentArea.innerText = calcValue;
  previousArea.innerText = '';
};

const result = () => {
  if (currentArea.innerText == '' && previousArea.innerText !== '') {
    currentArea.innerText = previousArea.innerText.slice(0, -1);
    previousArea.innerText = '';
  } else {
    console.log();
    calculate(previousArea.innerText[previousArea.innerText.length - 1]);
  }
};
