import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkipCard from '../components/SkipCard';
import { AppProvider } from '../context/provider/app.provider';

describe('Test skipcard component', () => {
  beforeEach(async () => {
    render(
      <AppProvider>
        <SkipCard
          skipItem={{
            id: 1,
            size: 0,
            hire_period_days: 0,
            transport_cost: null,
            per_tonne_cost: null,
            price_before_vat: 0,
            vat: 0,
            postcode: '',
            area: null,
            forbidden: false,
            created_at: '',
            updated_at: '',
            allowed_on_road: false,
            allows_heavy_waste: false,
          }}
        />
      </AppProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('Test title', async () => {
    expect(screen.getByTestId('card')).toHaveTextContent('Yard Skip');
  });

  test('Test button', async () => {
    const button = screen.getByRole('button');
    const card = screen.getByTestId('card');
    fireEvent.click(button);
    expect(card).toHaveClass('border-blue-500 border-2');
    expect(card).toHaveTextContent('Selected');
  });

  test('Test checkbox', async () => {
    const checkbox = screen.getByRole('checkbox');
    const card = screen.getByTestId('card');

    fireEvent.click(checkbox);

    expect(card).toHaveClass('border-blue-500 border-2');
    expect(card).toHaveTextContent('Selected');
  });
});
