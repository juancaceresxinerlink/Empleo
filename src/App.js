import React, { useState } from 'react';
import { AppRouter } from './router/AppRouter';
import { SearchContext } from './components/search/SearchContext';
import { useFetch } from './hooks/useFetch';


export const App = () => {

	const initialFilter = {
		page: 0,
		orderBy: 'recent',
		brand: '',
		locations: [],
		min_salary: 0,
		max_salary: 999999999
	};

	const [filters, setFilters] = useState(initialFilter);

	// Esta es la URL de la API, se envia con el custom hook 'useFetch' y al obtener una respuesta renderiza la pantalla
	// Mientras no exista respuesta, se mantiene la pantalla de 'Loading'
	// Si deseas agregar Headers, deberás modificar la petición ingresando a './hooks/useFetch.js' 
	
	const url = 'https://cors-anywhere.herokuapp.com/https://bzngn73785.execute-api.sa-east-1.amazonaws.com/Desarrollo'

	const { data, loading } = useFetch(url);

	return (
		<SearchContext.Provider value={{filters, setFilters, data, loading}}>
			<AppRouter />
		</SearchContext.Provider>
	);
}

