import type { SiteContent } from "../types";

const fr: SiteContent = {
  home: {
    title:
      "Convertisseur PDF en noir et blanc et niveaux de gris — Outil en ligne gratuit",
    description:
      "Convertissez un PDF couleur en PDF niveaux de gris ou en PDF noir et blanc en ligne. Convertisseur PDF en niveaux de gris gratuit qui transforme les pages photographiées en scans nets — en privé, dans votre navigateur.",
    keywords:
      "pdf noir et blanc, pdf niveaux de gris, convertisseur pdf niveaux de gris, convertir en pdf niveaux de gris, convertir pdf niveaux de gris en noir et blanc, pdf couleur en niveaux de gris, pdf en noir et blanc, convertisseur pdf noir et blanc",
  },
  aboutMeta: {
    title: "À propos de BlackWhitePDF — Qui nous sommes et comment nous joindre",
    description:
      "Qui crée BlackWhitePDF, pourquoi chaque fichier est traité dans votre navigateur et comment nous contacter. Un outil PDF privé et sans compte pour ceux qui tiennent à leurs documents.",
    keywords:
      "à propos de blackwhitepdf, convertisseur pdf niveaux de gris, convertisseur pdf noir et blanc",
  },
  nav: {
    converter: "Convertisseur",
    about: "À propos",
    privacy: "Confidentialité",
    terms: "Conditions",
    contact: "Contact",
  },
  languageLabel: "Langue",
  hero: {
    eyebrow: "PDF niveaux de gris · PDF noir et blanc",
    h1: "Convertissez un PDF couleur en PDF niveaux de gris ou noir et blanc.",
    subLead:
      "Convertisseur en ligne et gratuit de PDF en niveaux de gris et en noir et blanc. Importez un PDF photographié ou en couleur, nettoyez chaque page pour obtenir un scan net et téléchargez — traité ",
    privacyLinkText: "en privé dans votre navigateur",
    imageAlt:
      "Page de PDF couleur convertie en PDF niveaux de gris et scan noir et blanc — photo originale face au résultat nettoyé",
    caption: "Original → Scanné",
    dropTitleBold: "Déposez votre PDF ici",
    dropTitleRest: " ou cliquez pour parcourir",
    dropSub:
      "Scans de livres combinés et PDF de plusieurs pages : toutes les pages sont filtrées ensemble.",
  },
  ui: {
    fileNameDefault: "document.pdf",
    pagesSingular: "page",
    pagesPlural: "pages",
    mode: "Mode",
    modeBw: "Noir et blanc",
    modeGray: "Niveaux de gris",
    resolution: "Résolution",
    dpi120: "120 DPI — fichier plus léger",
    dpi150: "150 DPI",
    dpi200: "200 DPI — recommandé",
    dpi300: "300 DPI — plus net",
    inkThreshold: "Seuil d'encre",
    inkThresholdHelp:
      "Plus bas = texte plus marqué (plus de taches). Plus haut = plus propre (peut affiner le texte pâle).",
    detailSize: "Taille du détail",
    detailSizeHelp:
      "Voisinage utilisé pour l'éclairage local. Plus grand gère les ombres plus douces.",
    contrast: "Contraste",
    despeckle: "Retirer les taches",
    crop: "Recadrer et redresser (glissez les coins)",
    cropHintLead: "Faites glisser les 4 coins sur l'",
    cropHintOriginal: "Original",
    cropHintTail:
      " jusqu'aux bords de la page. Le même recadrage s'applique à toutes les pages.",
    cropReset: "Réinitialiser les coins",
    cropCorner: "Coin de recadrage",
    previewPage: "Page d'aperçu",
    prevPage: "Page précédente",
    nextPage: "Page suivante",
    convert: "Convertir et télécharger le PDF",
    chooseAnother: "Choisir un autre fichier",
    original: "Original",
    scanned: "Scanné",
    processing: "Traitement…",
    starting: "Démarrage…",
    processingPage: "Traitement de la page {page} sur {total}…",
    done: "Terminé — le téléchargement a commencé.",
    error: "Une erreur est survenue. Essayez un DPI plus bas ou un autre PDF.",
    invalidFile: "Veuillez choisir un fichier PDF.",
  },
  about: {
    eyebrow: "À propos de cet outil",
    h2: "Convertisseur gratuit de PDF en niveaux de gris et en noir et blanc.",
    p1: "Si vous avez besoin d'un PDF en niveaux de gris net ou d'un vrai PDF en noir et blanc, cet outil en ligne et gratuit est fait pour ça. Il fonctionne entièrement dans votre navigateur : vous importez un fichier, ajustez l'aperçu et téléchargez un résultat prêt à imprimer sans envoyer de documents vers un serveur distant.",
    p2: "On l'utilise quand un fichier couleur est difficile à lire, coûteux à imprimer ou trop bruité pour l'archivage, et quand il faut passer de la couleur au noir et blanc pour des formulaires, des contrats ou des livres scannés. Le convertisseur couvre les deux voies : un nettoyage doux en niveaux de gris pour les pages naturelles et un mode noir et blanc à fort contraste quand vous voulez de l'encre franche sur papier blanc.",
    steps: {
      h3: "Du PDF couleur au niveaux de gris en quelques étapes",
      p: "Déposez votre fichier dans la zone d'import, gardez Niveaux de gris sélectionné et regardez l'aperçu en direct se mettre à jour pendant que vous réglez le seuil d'encre, la taille du détail, le contraste et la résolution. Quand la page est bonne, convertissez toutes les pages d'un coup et téléchargez un nouveau PDF en niveaux de gris. Le même traitement finalise aussi les exports d'autres applis, pour que les ombres, la teinte jaune du papier et la transparence disparaissent avant l'impression ou le partage.",
    },
    bw: {
      h3: "Convertir un PDF niveaux de gris en noir et blanc",
      p: "Vous préférez l'encre pure ? Passez en Noir et blanc pour convertir avec un seuillage adaptatif — idéal pour la photocopie, la préparation OCR ou l'impression monochrome économique. Vous pouvez aussi partir de la photo d'une page de livre, la redresser avec l'outil de recadrage à quatre coins, puis exporter un scan propre qui ressemble à un scan à plat plutôt qu'à une photo de téléphone.",
    },
    private: {
      h3: "Privé par conception",
      p: "Le traitement reste sur votre appareil : brouillons, scans de pièces d'identité et fichiers clients ne quittent jamais votre machine. Les préréglages de résolution de 120 à 300 DPI équilibrent taille de fichier et netteté, et vous pouvez appliquer un seul cadre de recadrage à un livre entier lorsque les pages partagent le même cadrage.",
    },
    cards: [
      {
        title: "PDF niveaux de gris",
        desc: "Convertissez un PDF couleur en niveaux de gris avec des fonds blancs.",
      },
      {
        title: "PDF noir et blanc",
        desc: "Convertissez couleur ou niveaux de gris en encre noire franche sur blanc.",
      },
      {
        title: "Recadrer et redresser",
        desc: "Redressez les pages de livres photographiées avec quatre coins déplaçables.",
      },
      {
        title: "Privé par conception",
        desc: "Aucun serveur d'envoi : la conversion reste dans votre navigateur.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    h2: "Comment convertir un PDF en niveaux de gris ou en noir et blanc.",
    subhead:
      "Réponses rapides pour créer un PDF en niveaux de gris ou en noir et blanc en ligne avec ce convertisseur gratuit.",
    items: [
      {
        question: "Comment convertir un PDF en niveaux de gris ?",
        answer:
          "Ouvrez cette page, déposez votre PDF et laissez le Mode sur Niveaux de gris. Réglez le seuil d'encre, la taille du détail et le contraste jusqu'à ce que l'aperçu en direct soit propre, puis cliquez sur Convertir et télécharger le PDF. Chaque page est aplatie en gris neutres sur un fond blanc lumineux et enregistrée comme un nouveau PDF en niveaux de gris, votre fichier original restant intact.",
      },
      {
        question: "Comment rendre un PDF en noir et blanc ?",
        answer:
          "Importez votre fichier et passez le Mode en Noir et blanc. Le seuillage adaptatif transforme le texte en encre noire franche sur papier blanc, idéal pour la photocopie, la préparation OCR ou l'impression monochrome économique. Augmentez le seuil pour des pages plus propres ou baissez-le pour un texte plus marqué, puis téléchargez le PDF en noir et blanc.",
      },
      {
        question: "Puis-je recadrer et redresser des pages de livres photographiées ?",
        answer:
          "Oui. Activez Recadrer et redresser et faites glisser les quatre coins jusqu'aux bords de la page dans l'aperçu Original. L'outil corrige la perspective de chaque page pour qu'une photo de téléphone ressemble à un scan à plat. Le même cadre de recadrage s'applique à toutes les pages, utile pour un livre entier photographié avec le même cadrage.",
      },
      {
        question: "Quelle résolution (DPI) choisir ?",
        answer:
          "120 DPI produit le plus petit fichier et convient à la lecture à l'écran, 200 DPI est l'équilibre recommandé pour la plupart des documents et 300 DPI offre le texte le plus net pour l'impression, au prix d'un fichier plus lourd. Vous pouvez changer le DPI avant l'export sans réimporter le PDF.",
      },
      {
        question: "Mon PDF est-il envoyé sur un serveur ?",
        answer:
          "Non. Le rendu et le filtrage s'exécutent entièrement dans votre navigateur sur votre propre appareil, votre document ne quitte donc jamais votre machine et aucun compte n'est requis. Le convertisseur est ainsi sûr pour les brouillons, les scans de pièces d'identité et les fichiers clients confidentiels.",
      },
    ],
  },
  footer: {
    eyebrow: "Privé par conception",
    blurb:
      "Chaque page est rendue, filtrée et réassemblée entièrement dans votre navigateur. Votre PDF ne quitte jamais votre appareil.",
    converter: "Convertisseur",
    about: "À propos",
    privacy: "Politique de confidentialité",
    terms: "Conditions générales",
    contact: "Contact",
    copyrightTail: "· convertisseur PDF niveaux de gris et noir et blanc",
  },
  aboutPage: {
    eyebrow: "À propos",
    h1: "À propos de BlackWhitePDF.",
    subhead:
      "BlackWhitePDF est un petit outil indépendant pour nettoyer des documents directement dans votre navigateur. Pas de compte, pas d'envoi, pas de suivi — juste un utilitaire ciblé qui fait bien une seule chose.",
    whyBuilt: {
      h2: "Pourquoi nous l'avons créé",
      p: "Les photos de pages de livres et les diaporamas exportés paraissent brouillons à l'impression, à l'archivage ou au partage, et la plupart des solutions imposaient d'envoyer des fichiers privés vers un serveur inconnu. Nous voulions un outil qui ne demande jamais cela. BlackWhitePDF fonctionne donc entièrement sur votre appareil et garde l'expérience volontairement simple.",
    },
    privacyStance: {
      h2: "Notre position sur la confidentialité",
      p: "Des brouillons sensibles, des livres scannés et des fichiers clients ne devraient jamais nécessiter un envoi à un tiers juste pour être nettoyés. Chaque conversion se fait localement dans votre navigateur, vos fichiers ne nous sont jamais envoyés et aucun compte n'est requis.",
    },
    contact: {
      h2: "Nous contacter",
      lead: "Questions, rapports de bugs ou idées de fonctionnalités sont les bienvenus. Écrivez-nous à ",
      email: "hello@blackwhitepdf.com",
      tail: " et nous répondons généralement en quelques jours ouvrés.",
    },
    tryIt: {
      h2: "Essayez-le",
      lead: "Prêt à nettoyer un fichier ? Rendez-vous sur le ",
      homeLinkText: "convertisseur",
      tail: " pour convertir un PDF en niveaux de gris ou en noir et blanc en quelques clics.",
    },
  },
};

export default fr;
