let arr =[{
    name: "hamid",
    age: "",
  
}]



exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "my-dynamic-page",
    component: require.resolve(`./src/templates/dynamic-page.tsx`),
    context: {
      name: "hamid",
      age: "!3",
    },
  });
  console.log("End of Gatsby Node File");
};
