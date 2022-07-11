import './App.scss';
import ContentRouter from 'views/ContentRouter';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <main className='flex column'>
        <ContentRouter />
      </main>
    </QueryClientProvider>

  );
}

export default App;
