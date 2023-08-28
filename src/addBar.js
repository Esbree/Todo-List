const createAddBar = () => {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item-div');
  const inputField = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'add';

  const mainDiv = document.querySelector('.main');

  itemDiv.appendChild(inputField);
  itemDiv.appendChild(button);

  mainDiv.appendChild(itemDiv);
};

export default createAddBar;
