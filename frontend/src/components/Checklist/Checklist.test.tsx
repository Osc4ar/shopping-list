import { render, screen } from '@testing-library/react';
import Checklist from '.';

describe('Checklist', () => {
  it('Renders add button', () => {
    render(
      <Checklist />
    );

    expect(screen.getByRole('button')).toBeTruthy();
  });
});