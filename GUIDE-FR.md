# 📖 Mode d'emploi du site (sans être développeur)

Ce guide explique, **étape par étape et sans jargon**, comment modifier ce site :
changer les photos, les coordonnées, les besoins, les textes, etc.

> 👉 **99 % des modifications se font dans un seul fichier : `data.js`.**
> Tu n'as pas besoin de savoir coder, juste de remplacer du texte entre guillemets.

---

## 1. Les 3 règles d'or (à lire avant de toucher quoi que ce soit)

Le fichier `data.js` est une liste d'informations. Pour ne rien casser :

1. **Ne modifie que le texte entre guillemets `"..."`.**
   Exemple : dans `phone: "+84 000 000 000"`, change seulement
   `+84 000 000 000`, **pas** le mot `phone` ni les guillemets.

2. **Garde les guillemets et la virgule.**
   Chaque ligne ressemble à `clé: "valeur",` — laisse le `:`, les `"` et la `,`.

3. **Utilise des guillemets droits `"` (pas « » ni " ").**
   Si tu copies depuis Word, remplace-les par des guillemets simples du clavier.

> 🛟 **En cas d'erreur** (la page devient blanche), c'est presque toujours une
> virgule ou un guillemet oublié. Annule ta dernière modification (Ctrl + Z) et
> réessaie. Voir aussi la section « En cas de problème » en bas.

### Comment ouvrir `data.js` ?
- **Windows** : clic droit sur `data.js` → *Ouvrir avec* → **Bloc-notes**.
- **Mac** : clic droit → *Ouvrir avec* → **TextEdit**.
- Encore mieux (gratuit, plus confortable) : **Visual Studio Code** ou **Notepad++**.

---

## 2. Changer les coordonnées (téléphone, adresse, etc.)

Ouvre `data.js`. Tout en haut, cherche le bloc `config: { ... }`. Modifie :

| À changer | Ligne à trouver | Astuce |
|-----------|-----------------|--------|
| Adresse | `address: "Da Nang, Vietnam"` | Adresse affichée et utilisée pour Google |
| Lien Google Maps | `googleMapsUrl: "https://..."` | Copie l'URL depuis Google Maps (bouton *Partager*) |
| Téléphone | `phone: "+84 000 000 000"` | Tel qu'on doit l'afficher |
| WhatsApp | `whatsapp: "+84000000000"` | **Chiffres uniquement, sans espaces** |
| E-mail | `email: "contact@example.org"` | |
| Facebook | `facebookUrl: ""` | Colle l'adresse complète `https://...` |

> 💡 **Pour cacher une info** (ex. pas de Facebook), laisse les guillemets vides :
> `facebookUrl: ""`. Le bouton/la ligne disparaît automatiquement.

---

## 3. Changer les photos

Toutes les images sont dans le dossier **`images/`**.

### A) Remplacer une photo existante (le plus simple)
1. Prépare ta photo (format `.jpg` de préférence, voir conseils plus bas).
2. **Renomme-la exactement comme l'ancienne** : `hero.svg` → ta photo en
   `hero.jpg`, etc.
3. Comme l'extension change (`.svg` → `.jpg`), ouvre `data.js`, trouve la ligne
   `src: "images/hero.svg"` et remplace-la par `src: "images/hero.jpg"`.

### B) Ajouter une nouvelle photo au carrousel
Dans `data.js`, trouve la liste `photos: [ ... ]` et ajoute un bloc à la fin
(avant le `]`). Copie-colle ce modèle :

```js
{
  src: "images/ma-photo.jpg",
  alt: { en: "Short description (English)", vi: "Mô tả ngắn (Tiếng Việt)" },
  caption: { en: "Caption shown under the photo", vi: "Chú thích dưới ảnh" }
},
```

- `src` = chemin de l'image dans `images/`.
- `alt` = description courte (pour les malvoyants) — **obligatoire**.
- `caption` = légende affichée sous la photo — **optionnelle** (si tu l'enlèves,
  c'est le texte `alt` qui s'affiche).
- N'oublie pas la **virgule** à la fin du bloc s'il y a d'autres photos après.

Le carrousel s'adapte tout seul : flèches, points et miniatures apparaissent
selon le nombre de photos. Avec une seule photo, tout est masqué.

### 📸 Conseils & règles pour les photos
- **Jamais de photo d'enfant reconnaissable sans autorisation écrite** des parents.
- Privilégie : façade du bâtiment, salle vide, dons, équipe adulte (avec accord).
- Taille conseillée : ~1200 × 900 pixels. Compresse-les sur https://squoosh.app
  pour que le site reste rapide.
- En cas de doute, **garde les images grises par défaut** : le site reste crédible.

---

## 4. Changer les textes (anglais + vietnamien)

Toujours dans `data.js`, sous `content: { ... }`, il y a deux blocs :
- `en: { ... }` → la version **anglaise**
- `vi: { ... }` → la version **vietnamienne**

➡️ **Quand tu modifies un texte en anglais, modifie aussi son équivalent en
vietnamien** (même clé dans les deux blocs). Si tu oublies le vietnamien,
l'anglais s'affiche à la place — ce n'est pas grave, mais c'est moins propre.

Exemples de textes utiles à personnaliser :

| Clé | À quoi ça sert |
|-----|----------------|
| `name` | Nom de l'association |
| `subtitle` | Petite phrase sous le nom |
| `shortDescription` | Description courte (hero + partage) |
| `longDescription` | Présentation dans « About » |
| `currentNeeds: [ ... ]` | La liste des besoins (les badges) |
| `acceptedDonations: [ ... ]` | Ce qu'on peut apporter |
| `notAcceptedDonations: [ ... ]` | À vérifier avant d'apporter |
| `openingHours` | Horaires |
| `visitPolicy` | Politique de visite |

Pour les **listes** (entre crochets `[ ]`), chaque élément est entre guillemets
et séparé par une virgule :

```js
currentNeeds: ["Rice", "Milk", "Diapers"],
```

---

## 5. Mettre à jour la date et le statut

Dans `config:` :
- `lastUpdated: "2026-06-09"` → mets la date du jour (format `année-mois-jour`).

Dans `content.en` et `content.vi` :
- `verifiedStatus: "Information to be confirmed"` → passe-le à
  `"Information confirmed by the organization"` quand l'asso a tout validé.

---

## 6. (Optionnel) Changer les couleurs

Les couleurs sont dans **`styles.css`**, tout en haut, dans le bloc `:root { }`.
Change juste le code couleur (ex. `#3f6f5e`). Tu peux choisir un code sur
https://www.color-hex.com.

```css
--color-primary: #3f6f5e;     /* vert principal */
--color-secondary: #b98a52;   /* accent brun doux */
--color-background: #faf6ee;  /* fond de page */
```

> Si tu changes `--color-primary`, mets la même couleur dans `data.js` à la ligne
> `themeColor: "..."` (couleur de la barre du navigateur sur mobile).

---

## 7. Voir le résultat et publier les changements

### Voir le site sur ton ordinateur (avant publication)
Double-clique simplement sur **`index.html`** : il s'ouvre dans ton navigateur.
(Pour un rendu parfait, voir la section « Run it locally » du `README.md`.)

### Publier la nouvelle version en ligne
Tout dépend de comment le site a été mis en ligne :
- **Cloudflare Pages par glisser-déposer** : retourne sur le tableau de bord
  Cloudflare → ton projet → **Create deployment** → glisse à nouveau **tout le
  dossier**. La nouvelle version remplace l'ancienne en ~1 minute.
- **Cloudflare Pages connecté à GitHub** : il suffit d'envoyer (push) tes
  fichiers modifiés ; le site se met à jour tout seul.

(Détails complets dans `README.md`, section 3.)

---

## 8. En cas de problème 🛟

| Symptôme | Cause probable | Solution |
|----------|----------------|----------|
| Page blanche / cassée | Virgule ou guillemet oublié dans `data.js` | Annule (Ctrl + Z) ta dernière modif |
| Une photo ne s'affiche pas | Mauvais nom de fichier dans `src` | Vérifie que le nom dans `data.js` = le vrai nom du fichier dans `images/` |
| Texte bizarre / accents cassés | Fichier mal enregistré | Réenregistre en **UTF-8** (option « Encodage » de l'éditeur) |
| Le vietnamien n'apparaît pas | Clé manquante dans `vi` | Ajoute la même clé que dans `en` |

💡 **Conseil de sécurité** : avant une grosse modification, **fais une copie du
dossier** (copier-coller). Si quelque chose casse, tu reviens à la copie.

---

Besoin d'aide plus technique (déploiement, structure des fichiers) ? Voir le
**`README.md`**. Version anglaise de ce guide : **`GUIDE-EN.md`**.
