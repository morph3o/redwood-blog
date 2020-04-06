import BlogPost from 'src/components/BlogPost/BlogPost'

export const QUERY = gql`
  query($id: String!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => <BlogPost post={post} />
