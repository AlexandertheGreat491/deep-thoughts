import decode from "jwt-decode";

class AuthService {
  // retrieve data saved in token
  getProfile() {
    return decode(this.getToken());
  }

  // checks if the user is still logged in
  loggedIn() {
    // checks if there is a saved toekn and it's still valid
    const token = this.getToken();
    // uses type coersion to check if token isn't undefined and the token isn't expired
    return !!token && !this.isTokenExpired(token);
  }

  // checks if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  // retrieves token from localStorage
  getToken() {
    // retrieves the user from localStorage
    return localStorage.getItem("id_token");
  }

  // sets token to localStorage and reloads the page to homepage
  login(idToken) {
    // saves user token to localStorage
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
  }

  // clears token from localStorage and force logout with reload
  logout() {
    // clears user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // reloads the page and resets the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
