import '../assets/styles/home.css'

export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="home-layout">
        <header className="home-header">
          <h1>Home</h1>
        </header>
        <main className="home-main">{children}</main>
      </div>
    );
  }