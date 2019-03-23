const initialState = {
    loadIsReady: false,
    gallery_reducer_items: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_ALL_PHOTO' : 
        return {
            ...state,
            gallery_reducer_items: action.payload,
            loadIsReady: true
        };
        default:
        return state
    }
}