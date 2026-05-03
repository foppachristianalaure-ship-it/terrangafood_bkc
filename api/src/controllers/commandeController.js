const Commande = require('../models/Commande');

// =======================
// CREATE COMMANDE
// POST /api/commandes
// =======================
exports.create = async (req, res, next) => {
  try {
    const commande = new Commande(req.body);
    const saved = await commande.save();
    res.status(201).json(saved);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({
        message: 'Données invalides',
        erreurs: messages
      });
    }
    next(error);
  }
};

// =======================
// GET ALL COMMANDES
// GET /api/commandes
// =======================
exports.getAll = async (req, res, next) => {
  try {
    const commandes = await Commande.find()
      .populate('restaurant', 'nom adresse')
      .populate('plats', 'nom prix')
      .sort({ createdAt: -1 });

    res.status(200).json(commandes);
  } catch (error) {
    next(error);
  }
};

// =======================
// GET COMMANDE BY ID
// GET /api/commandes/:id
// =======================
exports.getById = async (req, res, next) => {
  try {
    const commande = await Commande.findById(req.params.id)
      .populate('restaurant', 'nom adresse telephone')
      .populate('plats', 'nom prix categorie');

    if (!commande) {
      return res.status(404).json({
        message: 'Commande non trouvée'
      });
    }

    res.status(200).json(commande);
  } catch (error) {
    next(error);
  }
};

// =======================
// UPDATE STATUT COMMANDE
// PATCH /api/commandes/:id/statut
// =======================
const transitionsAutorisees = {
  'en attente': ['confirmée', 'annulée'],
  'confirmée': ['en livraison', 'annulée'],
  'en livraison': ['livrée'],
  'livrée': [],
  'annulée': []
};

exports.updateStatut = async (req, res, next) => {
  try {
    const { statut } = req.body;

    if (!statut) {
      return res.status(400).json({
        message: 'Le champ statut est obligatoire'
      });
    }

    const commande = await Commande.findById(req.params.id);

    if (!commande) {
      return res.status(404).json({
        message: 'Commande non trouvée'
      });
    }

    const transitions = transitionsAutorisees[commande.statut];

    if (!transitions.includes(statut)) {
      return res.status(400).json({
        message: 'Transition impossible',
        details: `"${commande.statut}" ne peut pas devenir "${statut}"`,
        transitionsAutorisees: transitions
      });
    }

    commande.statut = statut;
    const updated = await commande.save();

    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

// =======================
// DELETE COMMANDE
// DELETE /api/commandes/:id
// =======================
exports.delete = async (req, res, next) => {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);

    if (!commande) {
      return res.status(404).json({
        message: 'Commande non trouvée'
      });
    }

    res.status(200).json({
      message: 'Commande supprimée avec succès'
    });
  } catch (error) {
    next(error);
  }
};