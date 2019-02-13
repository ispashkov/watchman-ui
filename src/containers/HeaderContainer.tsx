import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from "redux";
import Header from '../components/Header';
import { logout } from '../actions/auth';

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  logout
}, dispatch);

export default connect(null, mapDispatchToProps)(Header);
