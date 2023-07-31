

const Card = ({info}) => {
    // console.log(info)
  return (
    <div className="card">
      <h3 className="title">{info.title}</h3>
      <p className="body">{info.body}</p>
    </div>
  )
}

export default Card
