import './App.scss';
import ContentRouter from 'views/ContentRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'utils/contexts/Theme';

const client = new QueryClient();

function App()
{
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <main className='flex column'>
          <ContentRouter />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
