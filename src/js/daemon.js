import Character from './character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}