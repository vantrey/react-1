import {addNewDialogMsgActionCreator, dialogMsgUpdActionCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewDialogsMsg: () => {
      dispatch(addNewDialogMsgActionCreator())
    },
    dialogMsgUpd: (text) => {
      dispatch(dialogMsgUpdActionCreator(text))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs)