
function power() {
  const results = [
    {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
    {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
    {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
  ];
  return end = () => {
    const finder = findBy('name', 'урон');
    return results.filter(finder);
  };
};

console.log(power());
