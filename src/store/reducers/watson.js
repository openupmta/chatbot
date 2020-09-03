const INITIAL_STATE = {
    response: [],
    loading: false,
    error: false
}

export default function watson (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'WATSON_REQUEST':
            return {
                response: [],
                loading: true,
                hasError: false
            }
        case 'WATSON_RESPONSE_SUCCESS':
            return {
                response: action.response,
                loading: false,
                hasError: false
            }
        case 'WATSON_RESPONSE_ERROR':
            return {
                response: [],
                loading: false,
                hasError: true
            }
        default: return state;
    }
}