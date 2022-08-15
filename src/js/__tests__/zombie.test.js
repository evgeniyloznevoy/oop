import Zombie from '../zombie';

test('should create new zombie', () => {
  const newZombie = new Zombie('Валера');
  const expectedZombie = {
    name: 'Валера',
    type: 'Zombie',
    level: 1,
    private_health: 100,
    attack: 40,
    defence: 10,
  };
  expect(newZombie).toEqual(expectedZombie);
});