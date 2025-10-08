# Formation Création d'Entreprise - Page Web

Cette page web reproduit fidèlement la page de formation originale avec un design moderne et une fonctionnalité complète.

## Structure des fichiers

```
/workspace/
├── index.html          # Page principale HTML
├── styles.css          # Styles CSS complets
├── script.js           # JavaScript pour la fonctionnalité
├── images/             # Images de la page
│   ├── logo.png        # Logo ANTA2L
│   ├── iphone.png      # Image iPhone
│   └── laptop.png      # Image Laptop
└── README.md           # Ce fichier
```

## Fonctionnalités

### ✅ Design fidèle à l'original
- Header avec logo ANTA2L
- Section hero avec titre accrocheur et call-to-action
- Formulaire en 2 étapes avec validation
- Section des avantages avec images
- Footer avec liens sociaux

### ✅ Formulaire interactif
- **Étape 1** : Collecte des informations personnelles
- **Étape 2** : Récapitulatif et simulation de paiement
- Validation en temps réel des champs
- Messages d'erreur et de succès
- Design responsive pour mobile et desktop

### ✅ Fonctionnalités JavaScript
- Gestion des étapes du formulaire
- Validation des champs obligatoires
- Animation des transitions
- Notifications utilisateur
- Scroll smooth vers le formulaire

## Comment utiliser

### Option 1 : Serveur local
```bash
# Démarrer un serveur HTTP local
python3 -m http.server 8000

# Ouvrir dans le navigateur
http://localhost:8000
```

### Option 2 : Ouverture directe
Ouvrez simplement le fichier `index.html` dans votre navigateur web.

## Personnalisation

### Modifier les couleurs
Les couleurs principales sont définies dans `styles.css` :
- Couleur principale : `#7c3aed` (violet)
- Couleur d'accent : `#a91efe` (violet clair)
- Dégradé de fond : `linear-gradient(135deg, #6b46c1 0%, #7c3aed 50%, #4f46e5 100%)`

### Modifier le prix
Le prix est affiché à plusieurs endroits :
- Dans `index.html` : recherchez "299€"
- Dans `script.js` : fonction `formatPrice()`

### Ajouter un backend
Pour traiter les vrais paiements, modifiez la fonction `handleFinalSubmit()` dans `script.js` pour envoyer les données à votre API.

## Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (versions récentes)
- ✅ Mobile responsive (iPhone, Android)
- ✅ Tablettes
- ✅ Accessibilité de base

## Notes techniques

- Utilise les polices Google Fonts (Oswald, Asap, Lato)
- CSS Grid et Flexbox pour la mise en page
- JavaScript vanilla (pas de framework)
- Images optimisées et responsive
- Code modulaire et maintenable

## Prochaines étapes

Pour une mise en production :
1. Intégrer un vrai système de paiement (Stripe, PayPal)
2. Ajouter un backend pour traiter les inscriptions
3. Implémenter l'envoi d'emails de confirmation
4. Ajouter Google Analytics
5. Optimiser les images pour le web
6. Ajouter des tests unitaires