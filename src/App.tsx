import { BrowserRouter } from 'react-router-dom';
import Approuter from './router/Approuter';
import UserProvider from './Context/UserProvider';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Approuter />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
