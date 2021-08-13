import { memo, useState } from "react";
import { config } from "../../../config/config";
import { useFetchTeam } from "../../../hooks/useFetchTeam";
import { useInput } from "../../../hooks/useInput";
import { ResultsCanvas } from "./subComponents/ResultsCanvas";
import { SearchForm } from "./subComponents/SearchForm";

export const Teams = memo(() => {

    const [pageState, setPageState] = useState({
        apiEndPoint: config.teamEndPoint,
        search: '012345',
    });

    const { apiEndPoint, search } = pageState;
    const { data, loading, error } = useFetchTeam(apiEndPoint, search);
    const [inputValues, handleInputChange, resetInput] = useInput({
        searchText: ''
    });

    const { searchText } = inputValues;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchText.trim().length <= 2) {
            return;
        }

        setPageState({
            ...pageState,
            search: searchText
        });
        resetInput();
    }

    const players = !!data && data;

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <SearchForm
                    handleSubmit={handleSubmit}
                    searchText={searchText}
                    handleInputChange={handleInputChange}
                />

                <ResultsCanvas
                    players={players}
                    pageState={pageState}
                    loading={loading}
                    error={error}
                />
            </div>
        </div >
    );
});