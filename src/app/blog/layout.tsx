import '../assets/styles/blog.css'

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="blog-layout">
        <header className="blog-header">
          <h1>Blog</h1>
        </header>
        <main className="blog-main">{children}</main>
      </div>
    );
  }