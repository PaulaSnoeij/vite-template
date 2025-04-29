import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import {tea, coffee } from './utils/data';

export const App = () => {
	const greeting = 'Welcome to our cafe!';

	return (
		<div className="app">
			<h1>{greeting}</h1>
			<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
		</div>
	);
};
