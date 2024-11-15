import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem
  return (
    <div>
      <div className="blog-item">
        <h1 className="heading">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-line"/>
    </div>
  )
}

export default BlogItem
