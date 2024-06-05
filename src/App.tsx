// App.tsx
import Hospitals from './components/Hospitals';
import TitleHeader from './components/TitleHeader';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
<TitleHeader/>
      <Hospitals />
    </DataProvider>
  );
}

export default App;
