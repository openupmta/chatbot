import axios from 'axios';
import { sendMessage } from '../../store/actions/chat';

export const sendWatsonRequest = () => {
    return {
        type: 'WATSON_REQUEST',
        loading: true,
        hasError: false
    }
};

export const talkToWatsonSuccess = (response) => {
    return {
        type: 'WATSON_RESPONSE_SUCCESS',
        response,
        loading: false,
        hasError: false
    }
};

export const talkToWatsonError = (error) => {
    return {
        type: 'WATSON_RESPONSE_ERROR',
        error,
        loading: false,
        hasError: true
    }
};

export const talkToWatson = ((message, context) => {
    return dispatch => {
        dispatch(sendWatsonRequest());
        // Calls Watson back-end through firebase cloud functions
        const url = 'https://us-central1-chatbot-react-js.cloudfunctions.net/dialog';
        axios
            .post(url, {input: {text: message.text}, context: context})
            .then((response) => {
                dispatch(talkToWatsonSuccess(response));

                const message = {
                    text: response.data.output.text[0],
                    author: 'picklebot'
                };
                dispatch(sendMessage(message));
            })
            .catch((error) => dispatch(talkToWatsonError(error)));
    }
});