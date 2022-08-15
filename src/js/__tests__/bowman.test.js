import Bowman from '../bowman';

test('should create new bowman', () => {
  const newBowman = new Bowman('Валера');
  const expectedBowman = {
    name: 'Валера',
    type: 'Bowman',
    level: 1,
    private_health: 100,
    attack: 25,
    defence: 25,
  };
  expect(newBowman).toEqual(expectedBowman);
});