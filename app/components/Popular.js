import React from 'react';

class Popular extends React.Component {
  render() {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className="languages">
          {
            languages.map((language) => {
              return (
                <li key={language}>
                  {language}
                </li>
              );
            })
          }
        </ul>
    );
  }
}

export default Popular;
