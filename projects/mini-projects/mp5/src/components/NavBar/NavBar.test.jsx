import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar.jsx';

describe('NavBar component', () => {
    it('should render', () => {
        const view = render(<NavBar />);
        expect(view).toMatchSnapshot();
    });

    it('should render with a title', () => {
        const title = 'Test application';
        render(<NavBar title={title} />);
        expect(screen.getByRole('heading')).toHaveTextContent(title);
    });

    it('should respond to button clicks', () => {
        const mockFunction = vi.fn();
        render(<NavBar goBack={mockFunction} openForm={mockFunction} />);

        fireEvent.click(screen.getByText('< Go Back'));
        expect(mockFunction).toHaveBeenCalled();

        fireEvent.click(screen.getByText('+ Add Review'));
        expect(mockFunction).toHaveBeenCalledTimes(2);
    });
});
