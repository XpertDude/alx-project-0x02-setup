import Card from '@/components/common/Card';
import PostCard from '@/components/common/PostCard';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import { useState } from 'react';

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        return {
            props: {
                posts: data,
            },
        };
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return {
            props: {
                posts: [],
            },
        };
    }
}

interface PostsPageProps {
    posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
    const [showHide, setShowHide] = useState(false);

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
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            userId={post.userId}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
