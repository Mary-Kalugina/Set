import Team from '../Team';
import Character from '../Character';

test('add member', () => {
  const character = new Character('Dushnila', 6);
  const team = new Team();

  team.add(character);
  const result = [{ name: 'Dushnila', level: 6 }];
  expect(team.toArray()).toEqual(result);
});

test('add members', () => {
  const character = new Character('Dushnila', 6);
  const character2 = new Character('Dusya', 8);
  const team = new Team();

  team.addAll(character, character2);
  const result = [{ name: 'Dushnila', level: 6 }, { name: 'Dusya', level: 8 }];
  expect(team.toArray()).toEqual(result);
});

test('add duplicate member plus error', () => {
  const character1 = new Character('Dushnila', 6);
  const team = new Team();

  expect(() => {
    team.add(character1);
    team.add(character1);
  }).toThrowError('Already in the team');
});
