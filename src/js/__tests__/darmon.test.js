import Daemon from '../daemon';

test('should create new bowman', () => {
  const newDaemon = new Daemon('Daemon');
  const expectedDaemon = {
    name: 'Daemon',
    type: 'Daemon',
    level: 1,
    private_health: 100,
    attack: 10,
    defence: 40,
  };
  expect(newDaemon).toEqual(expectedDaemon);
});