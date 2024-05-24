import React from 'react'
import Ad from '../Ad'
import { Component } from 'react'

class AdPage extends Component{
  constructor(props) {
    super(props);

    this.state = { showAd: true };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((prevState) => ({
      showAd: !prevState.showAd
    }));
  }

  render() {
    return(
      <div>
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? '광고 숨김' : '광고 표시'}
        </button>
      </div>
    )
  }
}

export default AdPage;