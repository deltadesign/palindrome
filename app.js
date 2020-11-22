const form = document.querySelector('#input-form');
const input = document.querySelector('#user-text');

form.addEventListener('submit', testPalindrome);
input.addEventListener('click', resetForm);

function testPalindrome(event){
  const text = input.value.split(' ').join('').toLowerCase();
  const textReverse = text.split('').reverse().join('');

  if(text === ""){
    alert('Please add some text');
    }else if(text === textReverse) {
      result(true);
    } else {
     result(false);
  }
  event.preventDefault();
}

function result(outcome){

  const message = document.querySelector('.results')
  
  if(outcome === true){
    message.innerText =`${input.value} is a Palindrome`;
  } else {
    message.innerText =`${input.value} is NOT a Palindrome!`;
  }
}

function resetForm(event){
  document.querySelector('.results').innerText = "";
  input.value = "";
}