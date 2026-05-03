# Rapport de tests -- Lab 3 ( Docker )
 ## É quipe : [ bkc]
 ## Testeur : [ destin ] ( QA )

 ### Images Docker
 | # | Test | OK ? | Notes |
 | - - -| - - - - - - -| - - - - - -| - - - - - - - -|
 | 1 | docker build API r é ussit |✔️  | correct|
 | 2 | docker build Frontend r é ussit | ✔️ | correct|
 | 3 | Image API < 250 Mo | ✔️ | Taille :224mb|
| 4 | Image Frontend < 500 Mo |✔️  | Taille :224mb|

### Docker Compose
 | # | Test | OK ? | Notes |
 | - - -| - - - - -| - - - - - -| - - - --|
 | 5 | docker compose up -- build r é ussit |✔️  | correct|
| 6 | 3 conteneurs en é tat " Up " | ✔️ | correct|
 | 7 | Seed fonctionne dans le conteneur |✔️  |correct |
 | 8 | API r é pond sur localhost :3001 |✔️  |correct |
 | 9 | Frontend r é pond sur localhost :3000| ✔️ | corret|

 ### Fonctionnel
 | # | Test | OK ? | Notes |
 | - - -| - - - - - - - -| - - - - - -| - - - - - -|
 | 10| Restaurants affich é s |non |le frontend passe pas |
 | 11| Commande cr é é e via formulaire |non |le frontend passe pas |
 | 12| Commande visible dans mes - cmds |non | le frontend ne passe pas|
 | 13| Donn é es persistent apr è s restart | oui✔️ | correct|
 | 14| docker compose down fonctionne |oui✔️  | correct|
 | 15| docker compose down -v vide la DB | oui✔️ |correct |