import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

import BlogPostCell from '../../components/BlogPostCell/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <BlogPostCell id={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
