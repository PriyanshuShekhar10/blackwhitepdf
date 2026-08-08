export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureCard {
  title: string;
  desc: string;
}

export interface SiteContent {
  home: {
    title: string;
    description: string;
    /** Comma-separated keyword list. */
    keywords: string;
  };
  aboutMeta: {
    title: string;
    description: string;
    keywords: string;
  };
  /** Header nav labels. */
  nav: {
    converter: string;
    about: string;
    privacy: string;
    terms: string;
    contact: string;
  };
  /** aria-label for the language switcher. */
  languageLabel: string;
  hero: {
    eyebrow: string;
    h1: string;
    /** Sentence rendered before the inline privacy link (ends with a space). */
    subLead: string;
    privacyLinkText: string;
    imageAlt: string;
    caption: string;
    dropTitleBold: string;
    dropTitleRest: string;
    dropSub: string;
  };
  ui: {
    fileNameDefault: string;
    pagesSingular: string;
    pagesPlural: string;
    mode: string;
    modeBw: string;
    modeGray: string;
    resolution: string;
    dpi120: string;
    dpi150: string;
    dpi200: string;
    dpi300: string;
    inkThreshold: string;
    inkThresholdHelp: string;
    detailSize: string;
    detailSizeHelp: string;
    contrast: string;
    despeckle: string;
    crop: string;
    cropHintLead: string;
    cropHintOriginal: string;
    cropHintTail: string;
    cropReset: string;
    /** aria-label base for the four draggable crop corner handles. */
    cropCorner: string;
    previewPage: string;
    prevPage: string;
    nextPage: string;
    convert: string;
    chooseAnother: string;
    original: string;
    scanned: string;
    processing: string;
    starting: string;
    /** Uses {page} and {total} placeholders. */
    processingPage: string;
    done: string;
    error: string;
    invalidFile: string;
  };
  /** The marketing "#about" section on the home page. */
  about: {
    eyebrow: string;
    h2: string;
    p1: string;
    p2: string;
    steps: { h3: string; p: string };
    bw: { h3: string; p: string };
    private: { h3: string; p: string };
    cards: [FeatureCard, FeatureCard, FeatureCard, FeatureCard];
  };
  faq: {
    eyebrow: string;
    h2: string;
    subhead: string;
    items: FaqItem[];
  };
  footer: {
    eyebrow: string;
    blurb: string;
    converter: string;
    about: string;
    privacy: string;
    terms: string;
    contact: string;
    copyrightTail: string;
  };
  /** The standalone /about/ page. */
  aboutPage: {
    eyebrow: string;
    h1: string;
    subhead: string;
    whyBuilt: { h2: string; p: string };
    privacyStance: { h2: string; p: string };
    contact: { h2: string; lead: string; email: string; tail: string };
    tryIt: { h2: string; lead: string; homeLinkText: string; tail: string };
  };
}
