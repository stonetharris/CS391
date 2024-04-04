import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hotels from './Hotels.jsx';
import HotelsContext from '../context/HotelsContext.jsx';

describe('Hotels component', () => {
    it('should render loading state', async () => {
        const mockFunction = vi.fn();

        const wrapper = ({ children }) => (
            <HotelsContext.Provider
                value={{
                    loading: true,
                    error: '',
                    hotels: [],
                    fetchHotels: mockFunction,
                }}
            >
                {children}
            </HotelsContext.Provider>
        );

        render(<Hotels />, { wrapper });

        expect(await screen.findByText('Loading...')).toBeVisible();

        await waitFor(() => expect(mockFunction).toHaveBeenCalledTimes(1));
    });

    it('should render a list of hotels', async () => {
        const mockFunction = vi.fn();

        const wrapper = ({ children }) => (
            <BrowserRouter>
                <HotelsContext.Provider
                    value={{
                        loading: false,
                        error: '',
                        hotels: [
                            { id: 1, title: 'Test hotel 1', thumbnail: '' },
                            { id: 2, title: 'Test hotel 2', thumbnail: '' }
                        ],
                        fetchHotels: mockFunction,
                    }}
                >
                    {children}
                </HotelsContext.Provider>
            </BrowserRouter>
        );

        render(<Hotels />, { wrapper });

        expect(screen.queryByText('Loading...')).toBeNull();
        expect(screen.getAllByRole('link').length).toBe(2);
    });
});
