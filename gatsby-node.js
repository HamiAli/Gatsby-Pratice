let arr =[{
    name: "hamid",
    age: "",
  
}]



exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "friuts",
    component: require.resolve(`./src/templates/friuts.tsx`),
    context: {
      name: "hamid",
      age: "!3",
    },
  });
  console.log("End of Gatsby Node File");
};
