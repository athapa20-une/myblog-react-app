// src/components/BlogDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BlogDetails.css';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  created_at: string;
  status: number;
  user?: {
    _id: string;
    name: string;
    email: string;
  };
}

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPost(data.data); // Ensure you set the 'data' from the API response correctly
        setLoading(false);
      } catch (error) {
        setError('Error fetching post details');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>No post found</p>;

  return (
    <div className="blog-details">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="blog-meta">
        <p><strong>Author:</strong> {post.user ? post.user.name : 'Unknown'}</p> {/* Check if user is defined */}
        <p><strong>Email:</strong> {post.user ? post.user.email : 'N/A'}</p>    {/* Check if user is defined */}
        <p><strong>Status:</strong> {post.status === 1 ? 'Published' : 'Draft'}</p>
        <p><strong>Created at:</strong> {new Date(post.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
