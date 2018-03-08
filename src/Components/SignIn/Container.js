import { compose, withHandlers } from 'recompose';
import { withInputs } from 'custom-hoc';
import { withRouter } from 'react-router';
import { withUser } from '../../utils';
import Component from './Component';


const enhance = compose(
  withInputs({
    username: { validate: value => value.length < 20 && value.length > 3 },
    password: { validate: value => value.length < 20 && value.length > 5 }
  }),
  withRouter,
  withUser,
  withHandlers({
    onSubmit: ({ onUserChange, username, password, history }) => () => {
      onUserChange({ username, password, id: 1 });

      history.push('/');
    }
  }),
);

export default enhance(Component);