import React from 'react';
import { render, screen } from '@testing-library/react';
import ChecklistElement from '.';

describe('Checklist Item', () => {
  const itemName = 'Any Name';
  it('Renders Checklist Item Correctly', () => {
    render(
      <ChecklistElement id='1' name={itemName} />
    );

    expect(screen.getByLabelText(itemName)).toBeTruthy();
  });
});