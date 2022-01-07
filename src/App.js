import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import AppRouting from './AppRouting';

export const App = () => {
  return (
    <Flex w='100%'>
      <Sidebar />
      <AppRouting />
    </Flex>
  );
}

export default App;
