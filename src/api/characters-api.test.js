import { getCharacters, getCharacterById, fetchCharacters } from './characters-api';
import characters from '../data/characters.json';

describe('getCharacters', () => {
    const testCases = [
        { sort: 'name', order: 'asc', expected: [...characters].sort((a, b) => a.name.localeCompare(b.name)) },
        { sort: 'name', order: 'desc', expected: [...characters].sort((a, b) => b.name.localeCompare(a.name)) },
        { sort: 'modified', order: 'asc', expected: [...characters].sort((a, b) => new Date(a.modified) - new Date(b.modified)) },
        { sort: 'modified', order: 'desc', expected: [...characters].sort((a, b) => new Date(b.modified) - new Date(a.modified)) },
    ];

    testCases.forEach(({ sort, order, expected }) => {
        it(`should return characters sorted by ${sort} in ${order} order`, () => {
            const sortedCharacters = getCharacters(sort, order);
            expect(sortedCharacters).toEqual(expected);
        });
    });

    it('should return characters sorted by name in ascending order by default', () => {
        const sortedCharacters = getCharacters();
        expect(sortedCharacters).toEqual([...characters].sort((a, b) => a.name.localeCompare(b.name)));
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

    const testCases = [
        { sort: 'name', order: 'asc', expectedUrl: '/api/characters?sort=name&order=asc' },
        { sort: 'name', order: 'desc', expectedUrl: '/api/characters?sort=name&order=desc' },
        { sort: 'modified', order: 'asc', expectedUrl: '/api/characters?sort=modified&order=asc' },
        { sort: 'modified', order: 'desc', expectedUrl: '/api/characters?sort=modified&order=desc' },
    ];

    testCases.forEach(({ sort, order, expectedUrl }) => {
        it(`should fetch characters sorted by ${sort} in ${order} order`, async () => {
            const data = await fetchCharacters(sort, order);
            expect(data).toEqual(characters);
            expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
        });
    });

    it('should fetch characters sorted by name in ascending order by default', async () => {
        const data = await fetchCharacters();
        expect(data).toEqual(characters);
        expect(global.fetch).toHaveBeenCalledWith('/api/characters?sort=name&order=asc');
    });
});