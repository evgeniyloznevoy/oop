import Character from './character';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}