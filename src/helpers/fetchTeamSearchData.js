import { teamApiRequest } from './teamApiRequest';

export const fetchTeamSearchData = async (url, team) => {
    try {
        let playersToReturn = [];
        let currentPage = 1;

        const firstDataSet = await teamApiRequest(url, team, currentPage);
        let { totalPages } = firstDataSet;
        if (totalPages === 0) {
            return [];
        } else {
            for (currentPage; currentPage <= totalPages; currentPage++) {
                let dataSet = await teamApiRequest(url, team, currentPage);
                let { players } = dataSet;
                playersToReturn = [...playersToReturn, ...players];
            }
            return playersToReturn;
        }
    } catch (error) {
        throw new Error(error);
    }

}