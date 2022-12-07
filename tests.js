const capitalize = (text) => {
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstChar}${restSubstring}`;
  };

  if (capitalize('hello!') !== 'Hello!'){
    throw new Error ('Ошибка!');
  }
  
  if (capitalize('') !== '') {
    throw new Error('Функция работает неверно!');
  }
  
  console.log('Все тесты пройдены!');