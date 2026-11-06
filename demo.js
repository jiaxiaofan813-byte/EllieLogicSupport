'use strict';
const result = document.getElementById('demo-result');
const choices = document.querySelectorAll('[data-answer]');
choices.forEach(button => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    choices.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
    result.textContent = button.dataset.answer === '0' ? result.dataset.yes : result.dataset.no;
  });
});
