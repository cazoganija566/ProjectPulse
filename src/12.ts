  const getRandomTsCode = () => {
    let code = '';
  
    // Generate a random number between 1 and 9999
    const randomNumber = Math.floor(Math.random() * 9999) + 1;
  
    // Use the random number to generate a unique code
    for (let i = 0; i < 4; i++) {
      code += Math.floor(randomNumber / Math.pow(10, i)).toString();
    }
  
    return code;
  };
  