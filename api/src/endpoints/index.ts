import Application from "../modules/Application";
import serverless from "serverless-http";

module.exports.handler = async (event, context) => {
  return await serverless(Application)(event, context);
};
