import Card from '@/components/common/Card';
import PostCard from '@/components/common/PostCard';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import { CardProps, PostProps } from '@/interfaces';
import { useEffect, useState } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [showHide, setShowHide] = useState(false);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                if (!res.ok) return console.log('Failed to get data')
                setPosts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getPosts()
    }, [])
    return (
        <>
            <section>
                <Header />
                <div className='flex justify-center'>
                    <button
                        onClick={() => setShowHide((prev) => !prev)}
                        className='bg-green-300 rounded-2xl cursor-pointer text-white w-30 h-10 m-5'
                    >
                        Create post
                    </button>
                </div>
                <div className='p-4 grid-cols-4 grid-flow-row grid gap-4 justify-center items-center'>
                    {
                        posts && posts.map((post, index) => {
                            return <PostCard key={index} userId={post.userId} id={post.id} title={`${post.title}`} body={`${post.body}`} />
                        })
                    }
                </div>
            </section>
        </>
    );
}
