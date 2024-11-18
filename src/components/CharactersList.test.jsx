import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharactersList } from './CharactersList';

describe('CharactersList', () => {
    it('renders without crashing', () => {
        render(
            <Router>
                <CharactersList />
            </Router>
        );
    });

    it('renders a list of characters', () => {
        const characters = [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Thor' },
        ];

        const { getByText } = render(
            <Router>
                <CharactersList characters={characters} />
            </Router>
        );

        expect(getByText('Iron Man')).toBeInTheDocument();
        expect(getByText('Thor')).toBeInTheDocument();
    });

    it('renders links with correct href', () => {
        const characters = [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Thor' },
        ];

        const { getByText } = render(
            <Router>
                <CharactersList characters={characters} />
            </Router>
        );

        expect(getByText('Iron Man').closest('a')).toHaveAttribute('href', '/characters/1');
        expect(getByText('Thor').closest('a')).toHaveAttribute('href', '/characters/2');
    });

    it('renders an empty list when no characters are provided', () => {
        const { container } = render(
            <Router>
                <CharactersList characters={[]} />
            </Router>
        );

        expect(container.querySelector('ul#characters').children.length).toBe(0);
    });
});
