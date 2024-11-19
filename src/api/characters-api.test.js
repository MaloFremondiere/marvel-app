import { getCharacters, getCharacterById, fetchCharacters } from './characters-api';
import characters from '../data/characters.json';

describe('getCharacters', () => {
    it('should return characters sorted by name in ascending order by default', () => {
        const sortedCharacters = getCharacters();
        expect(sortedCharacters).toEqual([...characters].sort((a, b) => a.name.localeCompare(b.name)));
    });

    it('should return characters sorted by name in descending order', () => {
        const sortedCharacters = getCharacters('name', 'desc');
        expect(sortedCharacters).toEqual([...characters].sort((a, b) => b.name.localeCompare(a.name)));
    });

    it('should return characters sorted by modified date in ascending order', () => {
        const sortedCharacters = getCharacters('modified', 'asc');
        expect(sortedCharacters).toEqual([...characters].sort((a, b) => new Date(a.modified) - new Date(b.modified)));
    });

    it('should return characters sorted by modified date in descending order', () => {
        const sortedCharacters = getCharacters('modified', 'desc');
        expect(sortedCharacters).toEqual([...characters].sort((a, b) => new Date(b.modified) - new Date(a.modified)));
    });
});

describe('getCharacterById', () => {
    it('should return the character with the given id', () => {
        const character = characters[0];
        expect(getCharacterById(character.id)).toEqual(character);
    });

    it('should throw an error if the character with the given id is not found', () => {
        expect(() => getCharacterById(999)).toThrow('Character with id 999 not found');
    });
});

describe('fetchCharacters', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(characters),
            })
        );
    });

    it('should fetch characters sorted by name in ascending order by default', async () => {
        const data = await fetchCharacters();
        expect(data).toEqual(characters);
        expect(global.fetch).toHaveBeenCalledWith('/api/characters?sort=name&order=asc');
    });

    it('should fetch characters sorted by name in descending order', async () => {
        const data = await fetchCharacters('name', 'desc');
        expect(data).toEqual(characters);
        expect(global.fetch).toHaveBeenCalledWith('/api/characters?sort=name&order=desc');
    });

    it('should fetch characters sorted by modified date in ascending order', async () => {
        const data = await fetchCharacters('modified', 'asc');
        expect(data).toEqual(characters);
        expect(global.fetch).toHaveBeenCalledWith('/api/characters?sort=modified&order=asc');
    });

    it('should fetch characters sorted by modified date in descending order', async () => {
        const data = await fetchCharacters('modified', 'desc');
        expect(data).toEqual(characters);
        expect(global.fetch).toHaveBeenCalledWith('/api/characters?sort=modified&order=desc');
    });
});