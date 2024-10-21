export default function Post({data}){
console.log(data)
const {userId,id,title,body} = data

return (
    <div className="post">
        <h2>Id: {id}</h2>
        <h2>User Id: {userId} </h2>
        <h2>Title: {title}</h2>
        <p>Body: {body}</p>
    </div>
)

}