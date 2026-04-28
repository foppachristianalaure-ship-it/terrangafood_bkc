import StatutBadge from "../../components/StatutBadge";

export default function MesCommandes() {
  const commandes = [
    { id: 1, plat: "Thieboudienne", date: "28/04/2026", statut: "Livré", prix: "3500 FCFA" },
    { id: 2, plat: "Yassa Poulet", date: "28/04/2026", statut: "En cours", prix: "2500 FCFA" },
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Mes Commandes</h1>
      
      {commandes.map((cmd) => (
        <div key={cmd.id} style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '15px',
          borderBottom: '1px solid #eee',
          marginBottom: '10px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <div>
            <div style={{ fontWeight: 'bold' }}>{cmd.plat}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{cmd.date} • {cmd.prix}</div>
          </div>
          <StatutBadge status={cmd.statut} />
        </div>
      ))}
    </div>
  );
}