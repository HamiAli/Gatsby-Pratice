exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
 
  if (page.path.match(/^\/Product/)) {
    page.matchPath = "/Product/*";

    createPage(page);
  }
};
// exports.createPages = async function ({ actions }) {
//   actions.createPage({
//     path: "friuts",
//     component: require.resolve(`./src/templates/friuts.js`),
//     context: {
//       name: "hamid",
//       age: "17",
//     },
//   });
//   console.log("End of Gatsby Node File");
// };
