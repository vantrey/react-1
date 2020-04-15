import s from './Profile.module.css'
import React from "react"
import {connect} from "react-redux"
import Profile from './Profile'
import {setUserProfile} from "../../redux/profileReducer"
import * as axios from "axios"
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render = () => {
    return <div className={s.content}>
      <Profile {...this.props} profile={this.props.profile}/>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}
const ProfileContainerWithRouter = withRouter(ProfileContainer)
export default  connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)