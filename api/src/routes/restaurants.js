const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// GET    /api/restaurants          — Liste de tous les restaurants
router.get('/', restaurantController.getAll);

// GET    /api/restaurants/:id      — Détail d'un restaurant
router.get('/:id', restaurantController.getById);

// POST   /api/restaurants          — Créer un restaurant
router.post('/', restaurantController.create);

// PUT    /api/restaurants/:id      — Modifier un restaurant
router.put('/:id', restaurantController.update);

// DELETE /api/restaurants/:id      — Supprimer un restaurant
router.delete('/:id', restaurantController.delete);

module.exports = router;
