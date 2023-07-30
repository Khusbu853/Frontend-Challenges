import './App.css';
import AutoComplete from './component/AutoComplete';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div>
    <h1 className='font-bold px-10 mt-20 text-[2rem] '>AutoComplete</h1>
    <AutoComplete/>
      
    </div>
    </Provider>
  );
}

export default App;
