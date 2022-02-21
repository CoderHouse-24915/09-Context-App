import './App.css';
// Components
import Header from './components/Header';
import ItemList from './components/ItemList';

// 6 - IMPORTAR NUESTRO HOC PROVIDER Y ENVOLVER NUESTRA APP
import { ItemsProvider } from './itemsContext';

const App = () => {
	return (
		<ItemsProvider>
			<div className='App'>
				<Header />
				<ItemList />
			</div>
		</ItemsProvider>
	);
};

export default App;
