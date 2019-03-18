import findBy from '../src/js/findBy';

test('character', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(findBy('type', 'character'));
  expect(arr).toEqual([{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' }]);
});

test('attack', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(findBy('type', 'attack'));
  expect(arr).toEqual([{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' }]);
});

test('help', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(findBy('type', 'help'));
  expect(arr).toEqual([{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }]);
});
