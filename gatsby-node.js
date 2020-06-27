const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            modified
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postTemplate = path.resolve(`./src/templates/post.js`)

    // Iterate over the array of posts
    _.each(result.data.allWordpressPost.edges, edge => {
      // Add this post's categories and tags to the global list

      // Create the Gatsby page for this WordPress post
      createPage({
        path: `/${edge.node.slug}/`,
        component: postTemplate,
        context: {
          id: edge.node.id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
