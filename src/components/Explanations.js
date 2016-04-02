import React from 'react';

class Explanations extends React.Component {
  constructor(props) {
    super(props);
  }

  renderExplanation(explanation, index) {
    return (
      <li key={'explanation-' + index}>
        <h5>{explanation.fullform}</h5>
        <p>{explanation.meaning}</p>
      </li>
    );
  }

  render() {
    return (
      <ul className="explanations">
        {this.props.explanations.map(this.renderExplanation)}
      </ul>
    );
  }
}

export default Explanations;
