export default function PlatCard({ plat }) {
  return (
    <div className="plat-card">
      <span className="plat-card-categorie">{plat.categorie}</span>
      <h4>{plat.nom}</h4>
      <p className="plat-card-description">{plat.description}</p>
      <div className="plat-card-footer">
        <span className="plat-card-prix">{plat.prix.toLocaleString('fr-SN')} FCFA</span>
        <span className={`plat-card-dispo ${plat.disponible ? 'status-open' : 'status-closed'}`}>
          {plat.disponible ? '✅ Disponible' : '❌ Indisponible'}
        </span>
      </div>
    </div>
  );
}
