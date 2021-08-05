import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from "@chakra-ui/react"
import api from './config/api/api';

const queryClient = new QueryClient();

function App() {
  api.get('/user').then(res => console.log(res));
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <h1>App</h1>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
