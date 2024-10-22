import '../assets/styles/dashboard.css'

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="dashboard-layout">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
        </header>
        <main className="dashboard-main">{children}</main>
      </div>
    );
  }