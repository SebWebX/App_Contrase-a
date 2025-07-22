document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos
    const lengthInput = document.getElementById('length');
    const uppercaseInput = document.getElementById('uppercase');
    const lowercaseInput = document.getElementById('lowercase');
    const numbersInput = document.getElementById('numbers');
    const symbolsInput = document.getElementById('symbols');
    const generateBtn = document.getElementById('generate-btn');
    const passwordField = document.getElementById('password');
    const copyBtn = document.getElementById('copy-btn');
  
    // Evento para generar la contraseña
    generateBtn.addEventListener('click', () => {
      const length = parseInt(lengthInput.value);
      const uppercase = uppercaseInput.checked;
      const lowercase = lowercaseInput.checked;
      const numbers = numbersInput.checked;
      const symbols = symbolsInput.checked;
  
      const password = generatePassword(length, uppercase, lowercase, numbers, symbols);
      passwordField.value = password;
    });
  
    // Evento para copiar la contraseña
    copyBtn.addEventListener('click', () => {
      passwordField.select();
      document.execCommand('copy');
      alert('¡Contraseña copiada al portapapeles!');
    });
  
    // Función generadora
    function generatePassword(length, uppercase, lowercase, numbers, symbols) {
      const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lower = 'abcdefghijklmnopqrstuvwxyz';
      const num = '0123456789';
      const sym = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  
      let allChars = '';
      if (uppercase) allChars += upper;
      if (lowercase) allChars += lower;
      if (numbers) allChars += num;
      if (symbols) allChars += sym;
  
      if (!allChars) return '';
  
      let password = '';
      for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * allChars.length);
        password += allChars[index];
      }
      return password;
    }
  });
  
  