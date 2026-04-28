import Link from 'next/link';
import CommandeForm from '../../../components/CommandeForm';
import { getRestaurant, getPlatsByRestaurant } from '../../../lib/api';

export default async function CommanderPage({ params }) {
  const { id } = params;
  let restaurant = null;
  let plats = [];
  let error = null;

  try {
    // Récupération des données en parallèle pour plus de rapidité
    const [restaurantData, platsData] = await Promise.all([
      getRestaurant(id),
      getPlatsByRestaurant(id)
    ]);
    
    restaurant = restaurantData;
    plats = platsData;
  } catch (err) {
    error = err.message;
  }

  if (error || !restaurant) {
    return (
      <div className="commande-page">
        <Link href="/" className="back-link">
          ← Retour aux restaurants
        </Link>
        <div className="error">
          <p>{error || 'Restaurant non trouvé'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="commande-page">
      <Link href={`/restaurants/${id}`} className="back-link">
        ← Retour au restaurant
      </Link>
      
      <CommandeForm
        restaurant={restaurant}
        plats={plats.filter((p) => p.disponible)}
      />
    </div>
  );
}