import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const HomePage = ({ isAuthenticated }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? <button>Logout</button> : <Link to="/login">Login</Link>}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps({ user }) {
  return {
    isAuthenticated: !!user.uid
  };
}

export default connect(mapStateToProps, {})(HomePage);
