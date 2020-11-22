const form = document.querySelector('#input-form');
const input = document.querySelector('#user-text');

form.addEventListener('submit', testPalindrome);
input.addEventListener('click', resetForm);

function testPalindrome(event){
  const text = input.value.split(' ').join('').toLowerCase();
  const textReverse = text.split(' ').reverse().join('');

  console.log(text)
  console.log(textReverse)

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
  
  if(outcome === true){
    document.querySelector('.results').innerText ='That is a Palindrome!';
  } else {
    document.querySelector('.results').innerText ='That is NOT a Palindrome!';
  }
}

function resetForm(event){
  document.querySelector('.results').innerText = "";
  input.value = "";
}