import { act, cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/Home';
import * as api from '../utils/data-fetch';

jest.mock('../utils/data-fetch', () => ({
  getSkipRecords: jest.fn(),
}));

describe('Test home page', () => {
  beforeEach(async () => {
    (api.getSkipRecords as jest.Mock).mockResolvedValueOnce({
      status: 200,
      data: [{ id: 1, name: 'Skip 1' }],
    });
    await act(async () => {
      return render(<HomePage />);
    });
  });

  afterEach(() => {
    cleanup();
  });

  test('Test title', async () => {
    expect(screen.getByTestId('title')).toHaveTextContent(
      'Choose Your Skip Size'
    );
  });

  test('Test content', async () => {
    const content = screen.findByTestId('content');
    const children = (await content).childNodes;
    expect(children.length).toBeGreaterThan(0);
  });
});
