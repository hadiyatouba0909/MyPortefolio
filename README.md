# Portfolio de Hadiyatou BA

Portfolio personnel de Hadiyatou BA, développeuse Full-Stack Web / Mobile basée à Dakar (Sénégal). Le site présente son parcours, ses compétences, ses projets et permet de la contacter.

## Fonctionnalités

- Interface animée (Framer Motion, animations au scroll, particules, écran de chargement)
- Mode sombre / clair mémorisé dans le navigateur
- Pages : Accueil, À propos, Compétences, Projets, Contact
- Projets cliquables avec fenêtre de détails (description, fonctionnalités, liens vers le site, l'admin et le code source)
- Téléchargement du CV depuis la page d'accueil
- Formulaire de contact avec envoi d'e-mail via EmailJS
- Design responsive

## Technologies

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [EmailJS](https://www.emailjs.com/)
- react-icons, react-intersection-observer, react-countup

## Structure du projet

```
public/
  documents/     CV au format PDF
  images/        Photos et visuels
src/
  components/    Navbar et composants partagés
  pages/         Home, About, Skills, Projects, Contact
  App.jsx        Routes et fond animé
  main.jsx       Point d'entrée
  index.css      Styles globaux et thème
vercel.json      Réécriture des routes pour le SPA
```

## Installation

Prérequis : Node.js 18 ou supérieur.

```bash
git clone https://github.com/hadiyatouba0909/MyPortefolio.git
cd MyPortefolio
npm install
npm run dev
```

Le site est ensuite disponible sur `http://localhost:5173`.

## Scripts

| Commande          | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Lance le serveur de développement    |
| `npm run build`   | Génère la version de production      |
| `npm run preview` | Prévisualise la version de production |
| `npm run lint`    | Analyse le code avec ESLint          |

## Configuration du formulaire de contact

Le formulaire utilise EmailJS. Les identifiants (service, template et clé publique) sont définis en haut de `src/pages/Contact.jsx`.

## Déploiement

Le site est déployé sur [Vercel](https://vercel.com/). Le fichier `vercel.json` redirige toutes les routes vers `index.html` pour que la navigation React Router fonctionne au rechargement.

## Contact

- GitHub : [hadiyatouba0909](https://github.com/hadiyatouba0909)
- LinkedIn : [Hadiyatou BA](https://www.linkedin.com/in/hadiyatou-ba-a5742a247/)
- E-mail : hadiyatoubab09@gmail.com
