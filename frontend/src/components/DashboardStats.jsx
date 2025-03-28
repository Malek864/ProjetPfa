import { useEffect, useState } from "react";

const DashboardStats = () => {
  const [stats, setStats] = useState({ total: 0, onLeave: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/admin/kpis")
      .then((res) => res.json())
      .then(({ totalEmployees, employeesOnLeave }) =>
        setStats({ total: totalEmployees, onLeave: employeesOnLeave })
      )
      .catch((err) => console.error("Erreur API:", err));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard title="👥 Employés Actifs" value={stats.total} color="blue" />
      <StatCard title="🏖 En congé aujourd’hui" value={stats.onLeave} color="yellow" />
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div className={`bg-${color}-500 text-white p-4 rounded-xl shadow-lg`}>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-2xl">{value}</p>
  </div>
);

export default DashboardStats;
