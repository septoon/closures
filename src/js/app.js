export function findBy () {
  const arr = [
    {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
    {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
    {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
  ];
  const find = () => {
    const result = arr.find(x => x.name === 'урон'); 
    console.table(result);
  };

  return find;
};

export const finder = findBy();
