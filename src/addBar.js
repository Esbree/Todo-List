const createAddBar = () => {
  const barDiv = document.createElement('div');
  barDiv.classList.add('bar-div');
  const inputField = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'add';

  const mainDiv = document.querySelector('.main');

  barDiv.appendChild(inputField);
  barDiv.appendChild(button);

  mainDiv.appendChild(barDiv);
};

export default createAddBar;
