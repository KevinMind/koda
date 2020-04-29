/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react");
const Amplify = require('@aws-amplify/core').default;
const config = require('./aws-exports').default;

exports.wrapRootElement = ({ element }) => {
  Amplify.configure(config);
  return (
    <>
      {element}
    </>
  )
};
