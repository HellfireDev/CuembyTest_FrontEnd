import { useEffect, useRef, useState } from 'react';

export const useFetchPlayers = (url, search, order, page) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    const isMounted = useRef(true);

    //Flag to avoid trying to update an unmounted component
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url + `?search=${search}&order=${order}&page=${page}`, {
            headers: { 'x-api-key': process.env.CUEMBY_API_KEY_1 || 'super' },
        })
            .then(response => response.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        data,
                        loading: false,
                        error: false
                    });
                }
            }).catch(error => {
                setState({
                    data: null,
                    loading: false,
                    error: true
                })
            })
    }, [url, search, order, page]);

    return state;
}