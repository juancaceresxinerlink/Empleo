import { useState, useEffect } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null })
const headers = {
    "X-API-Key":"BmSSsb4cCQaFWASjdJ7yA2pPp6RtmWsq0URZUsu0"
     }
    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        // Para agregar headers, debes ingresarlos despues de 'url', ejemplo: fetch(url, {headers});
        fetch(url, headers)
            .then(resp => resp.json())
            .then(data => {

                setState({
                    loading: false,
                    error: null,
                    data
                })

            });

    }, [url]);

    return state;
}
