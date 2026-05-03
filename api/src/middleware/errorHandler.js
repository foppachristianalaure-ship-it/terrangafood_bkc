// Middleware de gestion globale des erreurs
const errorHandler = (err, req, res, next) => {
  console.error('❌ Erreur :', err.message);

  // Erreur de cast Mongoose (ID invalide)
  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'Identifiant invalide',
      details: `"${err.value}" n'est pas un identifiant MongoDB valide`
    });
  }

  // Erreur de validation Mongoose
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      message: 'Données invalides',
      erreurs: messages
    });
  }

  // Erreur serveur par défaut
  res.status(500).json({
    message: 'Erreur interne du serveur',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

module.exports = errorHandler;
