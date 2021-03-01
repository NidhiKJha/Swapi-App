import { Component } from 'react'
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: ''
  };
  
  dismissError = () => {
    this.setState({ error: '' });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    this.setAuthState();
    return this.setState({ error: '' });
  }

  setAuthState = () => {
    const { username, password } = this.state;

    this.getData("https://swapi.dev/api/people/?format=json").then((res) => {
      console.log(res);

      res.results.forEach((character) => {
        if (
          username.toLowerCase() === character.name.toLowerCase() &&
          password.toLowerCase() === character.birth_year.toLowerCase()
        ) {
          localStorage.setItem("isUserAuthenticated", true);
          this.props.history.push("/planets");
          return;
        } else {
          localStorage.setItem("isUserAuthenticated", false);
          return this.setState({ error: "Incorrect username or password!" });
        }
      });
    });
  };

  getData = (url) => {
    return fetch(url).then((response) => response.json());
  }

  handleUserChange = (e)=> {
    this.setState({
      username: e.target.value,
    });
  };

  handlePassChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  isAuthenticated=()=> {
    if(localStorage.getItem('isUserAuthenticated') === "true") {
      this.props.history.push('/planets');
     return true;
    }
  }

  componentWillMount() {
    this.isAuthenticated();
  }
  render() {
    return (
      <>
      <div className="login-form">
        <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              {
                this.state.error &&
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              }
              <h2 className="text-center">Login Page</h2>
              <div className="form-group">
                  <label htmlFor="username">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleUserChange}
                    value={this.state.username}
                    id="username"
                    placeholder="Username"
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={this.handlePassChange}
                    value={this.state.password}
                    id="password"
                    placeholder="Password"
                  />
              </div>
              <div className="login-button-container">
                <button
                  type="submit"
                  className="login-button"
                  id="login" value="Login">
                    Login
                  </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
