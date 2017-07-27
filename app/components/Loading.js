import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px',
  },
};


class Loading extends React.Component {
  constructor() {
    super(props);
    this.state = {
      text: props.text,
    };
  }
  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}

export default Loading;
