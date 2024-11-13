import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CharacterDetailPage from './CharacterDetailPage';
import { useLoaderData } from 'react-router-dom';

// Mock the useLoaderData hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLoaderData: jest.fn(),
}));

describe('CharacterDetailPage', () => {
    it('renders character name and detail component', () => {
        const mockCharacter = { name: 'Spider-Man', description: 'Friendly neighborhood Spider-Man' };
        useLoaderData.mockReturnValue(mockCharacter);

        const { getByText } = render(
            <MemoryRouter initialEntries={['/character/1']}>
                <Routes>
                    <Route path="/character/:id" element={<CharacterDetailPage />} />
                </Routes>
            </MemoryRouter>
        );

        expect(getByText('Spider-Man')).toBeInTheDocument();
        expect(getByText('Friendly neighborhood Spider-Man')).toBeInTheDocument();
    });
});