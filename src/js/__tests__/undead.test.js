import Undead from '../undead';

test('should create new undead', () => {
  const newUndead = new Undead('Валера');
  const expectedUndead = {
    name: 'Валера',
    type: 'Undead',
    level: 1,
    private_health: 100,
    attack: 25,
    defence: 25,
  };
  expect(newUndead).toEqual(expectedUndead);
});