import findBy from '../src/js/findBy';

test('test', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(findBy('type', 'character'));
  expect(arr).toEqual([{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' }]);
});
