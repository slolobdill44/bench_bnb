import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: (user) => dispatch(logout(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
