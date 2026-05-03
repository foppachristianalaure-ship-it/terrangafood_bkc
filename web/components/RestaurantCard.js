import Link from 'next/link';

// Emojis associés aux types de cuisine
const cuisineEmoji = {
  'Sénégalaise traditionnelle': '🍲',
  'Africaine fusion': '🌍',
  'Grillades sénégalaises': '🥩',
  'Fruits de mer': '🦐',
  'Café & snacks': '☕',
};

export default function RestaurantCard({ restaurant }) {
  const emoji = cuisineEmoji[restaurant.cuisine] || '🍽️';

  return (
    <Link href={`/restaurants/${restaurant._id}`}>
      <div className="restaurant-card">
        <div className="restaurant-card-image">
          {emoji}
        </div>
        <div className="restaurant-card-body">
          <h3>{restaurant.nom}</h3>
          <p className="restaurant-card-cuisine">{restaurant.cuisine}</p>
          <p className="restaurant-card-address">📍 {restaurant.adresse}</p>
          <div className="restaurant-card-footer">
            <span className="restaurant-card-note">⭐ {restaurant.note}/5</span>
            <span className={`restaurant-card-status ${restaurant.estOuvert ? 'status-open' : 'status-closed'}`}>
              {restaurant.estOuvert ? '🟢 Ouvert' : '🔴 Fermé'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
