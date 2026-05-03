const express = require('express');
const router = express.Router();
const platController = require('../controllers/platController');

// GET    /api/plats                          — Liste de tous les plats
router.get('/', platController.getAll);

// GET    /api/plats/restaurant/:restaurantId — Plats d'un restaurant
router.get('/restaurant/:restaurantId', platController.getByRestaurant);

// GET    /api/plats/:id                      — Détail d'un plat
router.get('/:id', platController.getById);

// POST   /api/plats                          — Créer un plat
router.post('/', platController.create);

// PUT    /api/plats/:id                      — Modifier un plat
router.put('/:id', platController.update);

// DELETE /api/plats/:id                      — Supprimer un plat
router.delete('/:id', platController.delete);

module.exports = router;
