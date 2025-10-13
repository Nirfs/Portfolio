#  Portfolio – Kevin PIEPLU

Bienvenue sur mon **portfolio de développeur web** !  
Ce projet présente mes **réalisations**, mes **compétences techniques** et mon **parcours de formation** dans le développement front-end et back-end.

---

## Objectif du projet

Créer un site vitrine moderne, responsive et rapide permettant de :
- Mettre en avant mes projets réalisés au cours de ma formation OpenClassrooms  
- Offrir une navigation fluide et intuitive  
- Illustrer mes compétences à travers des cas concrets et du code propre  

---

## Stack technique

- **Frontend :** React + Vite  
- **Routing :** React Router  
- **Styles :** SCSS / Tailwind (selon ta config)  
- **Animations :** Framer Motion  
- **Backend :** Node.js / Express (API hébergée sur Render ou autre)  
- **Hébergement :** Netlify / Vercel pour le front, Render pour le back  

---

## Structure du front
/src

  ├── api/ → appel fetch
  
  ├── components/ → Composants réutilisables
  
  ├── pages/ → Pages principales (Home, Projets, Contact)
  
  ├── hook/ → Hook scroll top
  
  ├── context/ → Contexte Auth / API
  
  ├── styles/ → SCSS
  
  └── assets/ → Images, icônes, logos

## Structure du back
/backend

  ├── controllers/ → Logique des routes (works, auth, etc.)
  
  ├── models/ → Schémas Mongoose (User, Work)
  
  ├── routes/ → Définition des endpoints
  
  ├── middleware/ → Authentification, validation
  
  ├── images/ → Fichiers images stockés localement
  
  ├── app.js → Configuration Express principale
  
  ├── server.js → Lancement du serveur HTTP
  
  └── .env → Variables d’environnement

## Fonctionnalités principales

- Liste dynamique des projets récupérés via une API  
- Page d’administration (connexion, ajout, suppression de projets)  
- Gestion d’images et de stacks techniques par projet  
- Animation de chargement personnalisée  
- Design responsive (mobile-first)

## Compétences mises en œuvre

- Intégration d’API RESTful  
- Gestion d’état et contexte React  
- Architecture front propre et scalable  
- Sécurité et gestion des tokens  
- Responsive design et performance web  
