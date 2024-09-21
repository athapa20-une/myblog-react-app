// src/components/BlogList.tsx
import React, { useEffect, useState } from 'react';
import { BlogPost } from '../types/types';
import '../styles/BlogList.css';

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/posts');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPosts(data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="blog-item">
            <a href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </a>
            <p>{post.content.substring(0, 100)}...</p>
            <div className="blog-meta">
              <p><strong>Author:</strong> {post.user.name}</p>
              <p><strong>Created at:</strong> {new Date(post.created_at).toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
