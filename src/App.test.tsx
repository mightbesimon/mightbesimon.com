import { render } from '@testing-library/react';
import App from './App';

test('renders copyright', () => {
  const root = render(<App />);
  const footer = root.container.querySelector('footer');
  expect(footer).toHaveTextContent(/copyright [\w\W]* mightbesimon.com/i);
});
