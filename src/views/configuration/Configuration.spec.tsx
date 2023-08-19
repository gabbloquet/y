import { render, screen } from "@testing-library/react";
import { Configuration } from "./index";

describe('Configuration view', () => {
  it('shows configuration doc', () => {
    render(<Configuration />);

    const mainTitle = screen.getByRole('heading', { level: 1 });
    expect(mainTitle).toBeVisible();
    expect(mainTitle).toHaveTextContent('Documentation');

    const suggestion = screen.getByRole('heading', { level: 2 });
    expect(suggestion).toBeVisible();
    expect(suggestion).toHaveTextContent('Suggestion');
  });
});
