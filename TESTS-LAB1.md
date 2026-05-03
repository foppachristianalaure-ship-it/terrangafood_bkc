# Rapport de tests -- Lab 1

## Équipe : TerrangaFood
## Testeur : [Jean Marie Diatta] (QA)

| # | Test | Résultat | Notes |
|---|------|----------|-------|
| 1 | POST commande valide | ✅ OK | Commande créée avec statut "en attente" |
| 2 | POST commande sans client | ✅ OK | Erreurs de validation affichées |
| 3 | GET toutes les commandes | ✅ OK | Liste des commandes récupérée |
| 4 | GET commande par ID | ✅ OK | Détails corrects avec populate |
| 5 | GET commande ID inexistant | ✅ OK | Retour 404 |
| 6 | PATCH en attente → confirmée | ✅ OK | Statut mis à jour |
| 7 | PATCH confirmée → en livraison | ✅ OK | Transition respectée |
| 8 | PATCH en livraison → livrée | ✅ OK | Cycle complet validé |
| 9 | PATCH transition interdite | ✅ OK | Erreur "Transition impossible" |
| 10 | PATCH commande livrée | ✅ OK | Aucune transition autorisée |
| 11 | DELETE commande | ✅ OK | Commande supprimée |
| 12 | Populate restaurant visible | ✅ OK | Nom + adresse affichés |
| 13 | Populate plats visible | ✅ OK | Détails des plats affichés |