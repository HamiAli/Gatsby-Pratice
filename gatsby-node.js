var path = require('path')
exports.createPages = async ({actions,graphql}) => {
    const {createPage} = actions ;
const result = await graphql(`
{
    allContentfulElectronicProject {
        nodes {
          slug
          title
        }
      }
}
`)
console.log(JSON.stringify(result))
result.data.allContentfulElectronicProject.nodes.forEach((obj)   =>{
    createPage({
        path:`products ${obj.slug}`,
        component:path.resolve(`./src/templates/products.js`),
        context:{
            itemDetails:obj
        }
    })
})
}