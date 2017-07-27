import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px',
  },
};

class Loading extends React.Component {
  constructor(props) {
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

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};

// if the prop.text isn't specified, make text 'Loading'
Loading.defaultProps = {
  text: 'Loading',
};

export default Loading;
