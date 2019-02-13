import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from "redux";
import { AppState } from '../interfaces';
import Auth from '../views/Auth';
import { auth } from '../actions/auth'

const mapStateToProps = (state: AppState) => ({
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  auth
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
