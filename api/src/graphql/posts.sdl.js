export const schema = gql`
  type Post {
    id: String!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post]
    post(id: String!): Post
  }

  input PostInput {
    title: String
    body: String
  }

  type Mutation {
    createPost(input: PostInput!): Post
    updatePost(id: String!, input: PostInput!): Post
    deletePost(id: String!): Post
  }
`
