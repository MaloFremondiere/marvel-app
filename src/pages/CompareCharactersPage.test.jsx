import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CompareCharactersPage from './CompareCharactersPage';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../data/characters.json', () => [
    {
        id: '1',
        name: 'Beast',
        capacities: {
            force: 10,
            intelligence: 8,
            durability: 7,
            energy: 6,
            speed: 5,
            fighting: 9,
        },
    },
    {
        id: '2',
        name: 'Captain America',
        capacities: {
            force: 7,
            intelligence: 9,
            durability: 6,
            energy: 8,
            speed: 7,
            fighting: 6,
        },
    },
]);

describe('CompareCharactersPage', () => {
    test('renders compare characters page with default options', async () => {
        render(<CompareCharactersPage />);
        expect(findByText('Compare characters')).toBeInTheDocument();
        expect(screen.getByTestId('select-character-1')).toHaveValue('0');
        expect(screen.getByTestId('select-character-2')).toHaveValue('1');
    });

    
    
    test('changes character selection', async () => {
            render(<CompareCharactersPage />);
            const select1 = await screen.findByTestId('select-character-1');
            const select2 = await screen.findByTestId('select-character-2');
    
            fireEvent.change(select1, { target: { value: '1' } });
            fireEvent.change(select2, { target: { value: '0' } });
    
            expect(select1).toHaveValue('1');
            expect(select2).toHaveValue('0');
            expect(select1).toHaveValue('1');
            expect(select2).toHaveValue('0');
    });

    test('renders radar chart with correct data', async () => {
        render(<CompareCharactersPage />);
        expect(await screen.findByTestId('radar-chart')).toBeInTheDocument();
    });
});