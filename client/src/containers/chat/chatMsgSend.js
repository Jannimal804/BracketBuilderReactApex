import { connect } from "react-redux";
import { sendMsg } from "../../redux/actions/chat/chatActions";
import chatMsgForm from "../../components/chat/chatMsgForm";

const mapStateToProps = state => ({
    id: state.chatApp.chatContent
})

const mapDispatchToProps = dispatch => ({
   onClick: (id, chatMsg) => dispatch(sendMsg(id, chatMsg)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(chatMsgForm);