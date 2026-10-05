import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout" style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}>
      <main className="container" style={{ paddingBottom: '4rem' }}>
        <div style={{ paddingTop: '2rem' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
