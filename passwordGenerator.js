const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q','r','s','t','u','v','w','x','y','z',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let generatedPassword = '';
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const characters = ['-','%','$','#','@','!'];
const commonPws = [
  '123456',   'password',   '123456789',  '12345678',  '12345',
  'qwerty',   '123123',     '111111',     'abc123',    '1234567',
  'dragon',   '1q2w3e4r',   'sunshine',   '654321',    'master',
  '1234',     'football',   '1234567890', '000000',    'computer',
  '666666',   'superman',   'michael',    'internet',  'iloveyou',
  'daniel',   '1qaz2wsx',   'monkey',     'shadow',    'jessica',
  'letmein',  'baseball',   'whatever',   'princess',  'abcd1234',
  '123321',   'starwars',   '121212',     'thomas',    'zxcvbnm',
  'trustno1', 'killer',     'welcome',    'jordan',    'aaaaaa',
  '123qwe',   'freedom',    'password1',  'charlie',   'batman',
  'jennifer', '7777777',    'michelle',   'diamond',   'oliver',
  'mercedes', 'benjamin',   '11111111',   'snoopy',    'samantha',
  'victoria', 'matrix',     'george',     'alexander', 'secret',
  'cookie',   'asdfgh',     '987654321',  '123abc',    'orange',
  'fuckyou',  'asdf1234',   'pepper',     'hunter',    'silver',
  'joshua',   'banana',     '1q2w3e',     'chelsea',   '1234qwer',
  'summer',   'qwertyuiop', 'phoenix',    'andrew',    'q1w2e3r4',
  'elephant', 'rainbow',    'mustang',    'merlin',    'london',
  'garfield', 'robert',     'chocolate',  '112233',    'samsung',
  'qazwsx',   'matthew',    'buster',     'jonathan',  'ginger'
];
//100 most common passwords
let slider = document.getElementById("slideRange");
let sliderValue = document.getElementById("slideLength");
const pwButtonDiv = document.querySelector('.button');
const pwButton = pwButtonDiv.querySelector("button");
let passwordOutput = document.getElementById("pword");
let strengthContainer = document.getElementById("strength");
let strengthOutput = document.getElementById("passwordStrength");
let form = document.getElementById("theForm");
let pwInput = form.querySelector("#pword");
console.log(form.querySelector("#pword"));
console.log(pwInput);
console.log(strengthOutput.innerHTML);
console.log(passwordOutput);


sliderValue.innerHTML = slider.value;
slider.addEventListener("input", function(){
  sliderValue.textContent = this.value;
});
console.log(passwordOutput);
pwButton.addEventListener("click", function(){
  randomPassword(parseInt(sliderValue.innerHTML));
  checkStrength(pwInput.value);
});

form.addEventListener("input", function(){
  checkStrength(pwInput.value);
  console.log(pwInput.value);
});


function randomPassword(pwLength){
  generatedPassword = '';
  for(let i = 0; i < pwLength - (Math.floor(pwLength / 2)); i++){
    let randomIndexL = Math.floor(Math.random() * letters.length);
    generatedPassword += letters[randomIndexL];
  }
  for(let j = 0; j < (Math.floor(pwLength / 4)); j++){
    let randomIndexN = Math.floor(Math.random() * numbers.length);
    generatedPassword += numbers[randomIndexN];
  }
  for(let j = 0; j < (Math.floor(pwLength / 4)); j++){
    let randomIndexC = Math.floor(Math.random() * characters.length);
    generatedPassword += characters[randomIndexC];
  }
  if(generatedPassword.length != pwLength){
    let difference = generatedPassword.length - pwLength;
      difference = Math.abs(difference);
      for(let k = 0; k < difference; k++){
        generatedPassword += '!';
      }
    }
    passwordOutput.value = generatedPassword;
  }

function checkStrength(password){
  let score = 0;
  const regexLower = /[a-z]/;
  const regexCaps = /[A-Z]/;
  const regexNumbers = /[0-9]/;
  const regexSpecial = /[-%$#@!]/;
  if(regexLower.test(password)){
    score += 1;
  }
  if(regexCaps.test(password)){
    score += 1;
  }
  if(regexNumbers.test(password)){
    score += 1;
  }
  if(regexSpecial.test(password)){
    score += 1;
  }
  if(password.length > 10){
    score += 1;
  }
  let strength = '';
  switch(score){
    case 6:
      strength = 'Very Strong';
      break;
    case 5:
      strength = 'Strong';
      break;
    case 4:
      strength = 'Secure';
      break;
    case 3: 
      strength = 'Fair';
      break; 
    case 2:
      strength = 'Weak';
      break;
    case 1:
      strength = 'Very Weak';
  }
  for(let a = 0; a < commonPws.length; a++){
    if(password == commonPws[a]){
      strength = 'Very Weak';
    }
  }
  console.log(strength);
  strengthOutput.innerHTML = strength;
}
