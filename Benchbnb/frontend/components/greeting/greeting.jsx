import React from 'react';

class Greeting extends React.Component {

  render() {
    if (this.props.user === null) {
      return (
        <div>
          
        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    }

  }
}

export default Greeting;
