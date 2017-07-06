import React from 'react';
import PropTypes from 'prop-types';
import fetchPopularRepos from '../utils/api';

function SelectLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {
        languages.map((lang) => {
          return (
            <li
              style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
              key={lang}
              onClick={props.onSelect.bind(null, lang)}>
              {lang}
            </li>
          );
        })
      }
    </ul>
  );
}

SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};



class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    fetchPopularRepos(this.state.selectedLanguage)
      .then(repo => console.log(repo));
  }

  updateLanguage(lang) {
    this.setState({ selectedLanguage: lang });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    );
  }
}

export default Popular;
