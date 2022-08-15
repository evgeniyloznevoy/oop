import Magician from '../magician';

test('should create new magician', () => {
  const newMagician = new Magician('Валера');
  const expectedMagician = {
    name: 'Валера',
    type: 'Magician',
    level: 1,
    private_health: 100,
    attack: 10,
    defence: 40,
  };
  expect(newMagician).toEqual(expectedMagician);
});