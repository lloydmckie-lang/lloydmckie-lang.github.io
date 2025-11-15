interface IBlogPost{
  title: string
  link: string
  description?: string
}
export function BlogPost(props: IBlogPost) {
  const { title, link, description} = props;
  return (
    <>
      <a href={link}><h1> {title}</h1></a>
      <span>{description}</span>
    </>
  )
}