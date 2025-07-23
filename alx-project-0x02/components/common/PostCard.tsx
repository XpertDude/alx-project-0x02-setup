import { PostProps } from "@/interfaces"

const PostCard: React.FC<PostProps> = ({ userId, id, title, body }) => {
  return (
    <div className="w-80 h-70 bg-gray-700 p-2 mt-2 text-black">
        <h1>{title}</h1>
        <div className="text-red-300">
            {body.length >= 300 ? `${body.slice(0, 300)}...`: body}
        </div>
        <p className="opacity-25">User: {userId}</p>
        <p className="opacity-25">post id: {id}</p>
    </div>
  )
}

export default PostCard 