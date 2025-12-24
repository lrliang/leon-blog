import { Metadata } from 'next';
import { getAllPosts, getFeaturedPosts } from '@/lib/content';
import { PostList } from '@/components/blog/list/PostList';

export const metadata: Metadata = {
  title: '博客',
  description: '分享 AI、编程、产品思考，道-法-术-器，从理念到实践',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="container px-4 py-12 md:px-8">
      {/* Featured Section */}
      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">精选文章</h2>
          <PostList posts={featuredPosts} />
        </section>
      )}

      {/* All Posts */}
      <section>
        <h1 className="mb-8 text-3xl font-bold tracking-tight">全部文章</h1>
        <PostList posts={allPosts} />
      </section>
    </div>
  );
}

