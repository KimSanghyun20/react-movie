/* useState 활용x
import React, { Component } from 'react'

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let loginMessage;

    if(isLoggedIn){
      button = <button class='loginBtn' onClick={this.handleLogoutClick}>로그아웃</button>
      loginMessage = <p className='loginMsg'>환영합니다!</p>;
    } else {
      button = <button class='loginBtn' onClick={this.handleLoginClick}>로그인</button>
      loginMessage = <p className='loginMsg'>로그인 해주세요!</p>
    }

    return(
      <div className='login-control'>
        {button}
        {loginMessage}
      </div>
    )
  }
}

export default LoginControl;
*/

/* useState 활용 */
import React, { useState } from 'react';

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const button = isLoggedIn
    ? <button className="loginBtn" onClick={handleLogoutClick}>로그아웃</button>
    : <button className="loginBtn" onClick={handleLoginClick}>로그인</button>;

  const loginMessage = isLoggedIn
    ? <p className="loginMsg">환영합니다!</p>
    : <p className="loginMsg">로그인 해주세요!</p>;

  return (
    <div className="login-control">
      {button}
      {loginMessage}
    </div>
  );
};

export default LoginControl;
