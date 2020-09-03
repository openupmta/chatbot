import React, {Component} from 'react';
import { Alert, Badge } from 'reactstrap';
import { connect } from 'react-redux';

class ChatbotDialog extends Component {
    updateDialog(message, key) {
        return (
            <div key={key} className='dialog-balloon'>
                {
                    message.author === 'user' && <span>
                        <Badge color='primary'> Bạn: </Badge>
                        <Alert color='primary'> {message.text} </Alert>
                    </span>

                }

                {
                    message.author === 'picklebot' && <span>
                        <Badge color='success'> Người lạ: </Badge>
                        <Alert color='success'> {message.text} </Alert>
                    </span>

                }
            </div>
        )
    }

    render() {
        return(
            <div className='chatbot-dialog'>
                {
                    Object.keys(this.props.messages).map(key => {
                        return this.updateDialog(this.props.messages[key], key)
                    })
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
}

export default connect(mapStateToProps, null)(ChatbotDialog);