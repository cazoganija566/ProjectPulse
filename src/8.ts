const getCode = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  switch (randomNumber) {
    case 1:
      return "console.log('Hello World!');";
    case 2:
      return "const name = prompt('Enter your name'); console.log(`Hello, ${name}!`);";
    case 3:
      return `const age = prompt('Enter your age'); if (age >= 18) { alert('You are old enough to drive!') } else { alert('You are not old enough to drive.') }`;
    case 4:
      return "const password = prompt('Enter a password'); const confirmPassword = prompt('Confirm your password'); if (password === confirmPassword) { alert('Your passwords match') } else { alert('Your passwords do not match') }";
    case 5:
      return "const name = prompt('Enter your name'); const age = prompt('Enter your age'); if (age >= 18) { alert('You are old enough to vote!') } else { alert('You are not old enough to vote.') }";
    case 6:
      return "const food = prompt('Enter a food'); const taste = prompt('Do you like this food?'); if (taste === 'yes') { console.log('Yay! You love it!') } else { console.log('Boo! You hate it!') }";
    case 7:
      return "const number = Math.floor(Math.random() * 10) + 1; const message = 'The number is '; switch (number) { case 1: message += 'one'; break; case 2: message += 'two'; break; case 3: message += 'three'; break; case 4: message += 'four'; break; case 5: message += 'five'; break; case 6: message += 'six'; break; case 7: message += 'seven'; break; case 8: message += 'eight'; break; case 9: message += 'nine'; break; default: message += 'zero'; break; } console.log(message);";
    case 8:
      return "const name = prompt('Enter your name'); const age = prompt('Enter your age'); const height = prompt('Enter your height (in inches)'); const weight = prompt('Enter your weight (in pounds)'); const bmi = Math.round(weight / (height * height)); console.log(`${name} has a BMI of ${bmi}`);";
    case 9:
      return "const number = Math.floor(Math.random() * 10) + 1; const message = 'The number is '; switch (number) { case 1: message += 'one'; break; case 2: message += 'two'; break; case 3: message += 'three'; break; case 4: message += 'four'; break; case 5: message += 'five'; break; case 6: message += 'six'; break; case 7: message += 'seven'; break; case 8: message += 'eight'; break; case 9: message += 'nine'; break; default: message += 'zero'; break; } console.log(message);";
    case 10:
      return "const name = prompt('Enter your name'); const age = prompt('Enter your age'); const height = prompt('Enter your height (in inches)'); const weight = prompt('Enter your weight (in pounds)'); const bmi = Math.round(weight / (height * height)); console.log(`${name} has a BMI of ${bmi}`);";
  }
};
