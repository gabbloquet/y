import { renderWithState } from '@/lib/store';
import { Home } from '@/pages/Home/Home';
import { screen } from '@testing-library/react';

describe('Home component', () => {
  it('displays timeline messages', () => {
    // When
    renderWithState(<Home />, {
      preloadedState: {
        timeline: {
          status: 'success',
          timeline: {
            messages: [
              {
                text: "Hello it's Bob !!",
                author: 'Bob',
                publishedAt: '2023-05-16T12:02:00.000Z'
              },
              {
                text: "Hello it's Alice",
                author: 'Alice',
                publishedAt: '2023-05-16T12:06:00.000Z'
              }
            ]
          }
        }
      }
    });

    // Then
    expect(screen.getByText("Hello it's Bob !!")).toBeVisible();
    expect(screen.getByText("Hello it's Alice")).toBeVisible();
  });

  it('displays messages for you', () => {
    // When
    renderWithState(<Home />, {
      preloadedState: {
        timeline: {
          status: 'success',
          timeline: {
            messages: [
              {
                text: "Hello it's Bob !!",
                author: 'Bob',
                publishedAt: '2023-05-16T12:02:00.000Z'
              },
              {
                text: "Hello it's Alice",
                author: 'Alice',
                publishedAt: '2023-05-16T12:06:00.000Z'
              }
            ]
          }
        }
      }
    });

    // Then
    expect(screen.getByText('Message(s) pour vous')).toBeVisible();
  });

  it('displays no message', () => {
    // When
    renderWithState(<Home />, {
      preloadedState: {
        timeline: {
          status: 'success',
          timeline: {}
        }
      }
    });

    // Then
    expect(screen.getByText("Il n'y a pas de message pour vous")).toBeVisible();
  });
});
