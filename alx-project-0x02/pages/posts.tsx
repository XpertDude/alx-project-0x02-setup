import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import { CardProps } from '@/interfaces';
import { useState } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState<CardProps[]>([]);
    const [showHide, setShowHide] = useState(false);

    const handlePosts = (post: CardProps) => {
        setPosts((prev) => [...prev, post]);
        setShowHide(false);
    }
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

                {showHide && <PostModal onSubmit={handlePosts} />}

                <div className='p-4 grid-cols-4 grid-flow-row grid gap-4 justify-center items-center'>
                    {posts.map((post, index) => (
                        <Card key={index} title={post.title} content={post.content} />
                    ))}
                </div>
            </section>
        </>
    );
}
