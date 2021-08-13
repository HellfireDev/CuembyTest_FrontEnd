import { useEffect, useRef, useState } from 'react';
import { fetchTeamSearchData } from '../helpers/fetchTeamSearchData';

export const useFetchTeam = (url, team) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    //Usage of return clean up to avoid trying to update an unmounted component
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

        fetchTeamSearchData(url, team)
            .then(response => {
                if (!!response && isMounted.current) {
                    setState({
                        data: response,
                        loading: false,
                        error: false
                    })
                } else if (isMounted.current) {
                    setState({
                        data: null,
                        loading: false,
                        error: false
                    })
                }
            }).catch(error => {
                if (isMounted.current) {
                    setState({
                        data: null,
                        loading: false,
                        error: true
                    })
                }
            });

    }, [url, team]);

    return state;
}