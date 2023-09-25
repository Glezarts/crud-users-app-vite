import { loadUsersByPage } from "../usecases/load-users";



const state = {
    currentPage: 0,
    users: []

}

const loadNextPage = async () => {
    const users = await loadUsersByPage( state.currentPage + 1 );
    if( users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
    console.log(state);

}

const loadNPreviousPage = async () => {
    throw new Error('Not implemented');

}

const onUsersChanged = () => {
    throw new Error('Not implemented');

}


const reloadPage = async () => {
    throw new Error('Not implemented');

}


export default {
    loadNPreviousPage,
    loadNextPage,
    reloadPage,
    onUsersChanged,
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}