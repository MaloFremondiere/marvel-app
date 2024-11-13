import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
    it('should render the ContactPage component', () => {
        const { getByText } = render(<ContactPage />);
        expect(getByText('Contact Us')).toBeInTheDocument();
    });

    it('should have the correct page title', () => {
        render(<ContactPage />);
        expect(document.title).toBe('Contact | Marvel App');
    });

    it('should render the contact email link', () => {
        const { getByText } = render(<ContactPage />);
        const emailLink = getByText('marvelApp@gmail.com');
        expect(emailLink).toBeInTheDocument();
        expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:marvelApp@gmail.com');
    });
});