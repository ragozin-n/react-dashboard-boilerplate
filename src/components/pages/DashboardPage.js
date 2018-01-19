import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isMailConfirmed }) => (
  <div>{!isMailConfirmed && <ConfirmEmailMessage />}</div>
);

DashboardPage.propTypes = {
  isMailConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps({ user }) {
  return { isMailConfirmed: !!user.emailVerified };
}

export default connect(mapStateToProps, {})(DashboardPage);
