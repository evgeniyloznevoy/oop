import Swordsman from '../swordsman';

test('should create new swordsman', () => {
  const newSwordsman = new Swordsman('Валера');
  const expectedSwordsman = {
    name: 'Валера',
    type: 'Swordsman',
    level: 1,
    private_health: 100,
    attack: 40,
    defence: 10,
  };
  expect(newSwordsman).toEqual(expectedSwordsman);
});