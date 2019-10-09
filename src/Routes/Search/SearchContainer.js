import React from "react";
import {withRouter} from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { SEARCH } from "./SearchQueries";
import {useQuery} from "react-apollo-hooks";

/*export default withRouter(props => {
    console.log(props);
    return null;
});*/

export default withRouter(({location:{search}})=>{
    const term =search.split("=")[1];
    const {data,loading}=useQuery(SEARCH,{
        skip:term===undefined,
        variables:{
            term
        }
    });
    console.log(data);
    return <SearchPresenter searchTerm={term} loading={loading} data={data}></SearchPresenter>;
});