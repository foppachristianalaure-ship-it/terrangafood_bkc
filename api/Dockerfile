# === Dockerfile API TerrangaFood ===

# Étape 1 : Image de base
FROM node:20-alpine

# Étape 2 : Répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers de dépendances
# On copie package.json et package-lock.json (si présent)
COPY package*.json ./

# Étape 4 : Installer les dépendances
# Utilisation de 'npm ci' recommandé pour la prod (plus rapide et fiable)
RUN npm install --production

# Étape 5 : Copier le code source
COPY . .

# Étape 6 : Documenter le port
EXPOSE 3001

# Étape 7 : Commande de démarrage
CMD ["node", "src/app.js"]