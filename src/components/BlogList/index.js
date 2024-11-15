import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="blogslist-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogItem={eachBlog} />
       
      ))}
       
    </div>
  )
}

export default BlogList
