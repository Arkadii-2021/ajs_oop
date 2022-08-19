import {
  Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../app';

const bowerman = new Bowerman('bowerman', 'Bowerman');
const swordsman = new Swordsman('swordsman', 'Swordsman');
const magician = new Magician('magician', 'Magician');
const daemon = new Daemon('daemon', 'Daemon');
const undead = new Undead('undead', 'Undead');
const zombie = new Zombie('zombie', 'Zombie');

const characterLevelUpList = [
  ['Bowerman', bowerman.levelUp(), 2],
  ['Daemon', daemon.levelUp(), 2],
  ['Undead', undead.levelUp(), 2],
  ['Zombie', zombie.levelUp(), 2],
];

const characterDamageList = [
  ['Bowerman', bowerman.damage(10), 93],
];

const handlerLevelUp = test.each(characterLevelUpList);
handlerLevelUp('test levelUp function on character %s', (_, levelUp, levelValue) => {
  expect(bowerman.level).toBe(levelValue);
  expect(daemon.level).toBe(levelValue);
});

const handlerDamage = test.each(characterDamageList);
handlerDamage('test damage function on character %s', (_, damage, damageValue) => {
  expect(bowerman.health).toBe(damageValue);
});

function checkHealth() {
  magician.health = 0;
  magician.levelUp();
  return magician;
}

function checkPoints() {
  swordsman.health = 0;
  swordsman.damage(25);
  return swordsman;
}

function checkNoStringNameCharacter() {
  const numberCharacter = new Character(2022, 100);
  return numberCharacter;
}

function checkCharacterNoIncludes() {
  const someMagic = new Magician('magician', 'SomeMagic');
  return someMagic;
}

test('check leveUp function if health <= 0', () => {
  expect(() => {
    checkHealth();
  }).toThrow();
});

test('check damage function if health = 0', () => {
  expect(() => {
    checkPoints();
  }).toThrow();
});

test('check function no string', () => {
  expect(() => {
    checkNoStringNameCharacter();
  }).toThrow();
});

test('check function no includes character', () => {
  expect(() => {
    checkCharacterNoIncludes();
  }).toThrow();
});
