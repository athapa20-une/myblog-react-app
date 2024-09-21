// Update the BlogPost type to include 'user' information
export interface BlogPost {
    _id: string;
    title: string;
    content: string;
    created_at: string;
    user: {
      _id: string;
      name: string;
      email: string;
    };
  }