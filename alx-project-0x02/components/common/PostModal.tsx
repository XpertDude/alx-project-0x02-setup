import React, { useState } from 'react';
import { PostModalProps } from '@/interfaces';
const PostModal: React.FC<PostModalProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content })
    setTitle('');
    setContent('');
  }
  return (
    <section className='flex justify-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-white w-60 p-2 m-1.5 flex flex-col justify-center items-center text-black gap-2.5 rounded-2xl'
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
          className='bg-blue-100 outline-0 h-8 p-2 w-full'
          type='text'
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Content'
          className='bg-blue-100 outline-0 h-8 p-2 w-full'
          type='text'
        />
        <button type='submit' className='bg-green-300 cursor-pointer rounded-2xl px-4 py-1 text-white'>
          Add
        </button>
      </form>
    </section>
  );
};

export default PostModal;
