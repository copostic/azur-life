# Azur Life — Landing pages d'acquisition payante

Deux landing pages production-ready pour les campagnes Google Ads :

- **`/expertise-immobiliere`** (FR) — sert les 4 ad groups GA-EXP-1 → GA-EXP-4 via un système de **message-match dynamique** par paramètre d'URL `?intent=`. Une seule page, quatre promesses adaptées.
- **`/ru/property-management`** (RU) — campagne Property Management russophone, **WhatsApp-first**, persona Natalia, exclusion explicite "ce n'est PAS de l'Airbnb/conciergerie".

Stack : **Astro 5** (SSG) · **Tailwind 4** · TypeScript strict · Fonts auto-hébergées (Astro Fonts API) · Sitemap auto. Build statique, déployable n'importe où (Cloudflare Pages, Netlify, Vercel, OVH static).

---

## 1. Installation & dev local

Pré-requis : **Node 20+** et **pnpm** (ou `npm`/`yarn`).

```bash
pnpm install
cp .env.example .env       # remplir les IDs (voir §3)
pnpm dev                   # http://localhost:4321
pnpm build                 # → ./dist
pnpm preview               # prévisualise le build statique
```

Le projet build sans `.env` (valeurs de fallback dans `src/lib/constants.ts`), mais les tags GTM/GA/Ads ne se chargeront pas tant que `PUBLIC_GTM_ID` est vide.

---

## 2. Mapping ad group → URL finale

Cible chaque ad group sur l'URL la plus spécifique (cf. masterclass §PHASE 3).

| Ad group | Intent | Final URL Google Ads |
|---|---|---|
| GA-EXP-1 Expert local (général) | _aucun_ (page par défaut) | `https://landing.azur-life.com/expertise-immobiliere` |
| GA-EXP-2 Succession / partage / donation | `succession` | `…/expertise-immobiliere?intent=succession` |
| GA-EXP-2 Divorce (sous-thème) | `divorce` | `…/expertise-immobiliere?intent=divorce` |
| GA-EXP-3 IFI / valeur vénale (saisonnier jan–juin) | `ifi` | `…/expertise-immobiliere?intent=ifi` |
| GA-EXP-4 Judiciaire / contentieux | `judiciaire` | `…/expertise-immobiliere?intent=judiciaire` |
| Property Management RU | — | `https://landing.azur-life.com/ru/property-management` |
| Marque (défensif) | — | `https://landing.azur-life.com/expertise-immobiliere` |

Au chargement, un mini-script (~30 lignes, inline, vanilla) lit `?intent=` et swappe **eyebrow + H1 + sous-titre** du hero, ajoute `.is-highlighted` sur la card du service correspondant, et pré-sélectionne la valeur dans le `<select>` du formulaire.

> **Cohérence message-ad → message-LP.** C'est ce que Google appelle "page experience" dans le Quality Score (~39 % du QS). Chaque variante hero reprend mot-pour-mot une promesse de l'annonce du même groupe.

---

## 3. Variables d'environnement

Copier `.env.example` → `.env` et remplir :

| Variable | Description | Exemple |
|---|---|---|
| `PUBLIC_GTM_ID` | Conteneur GTM (recommandé — fait tout passer par lui) | `GTM-XXXXXXX` |
| `PUBLIC_GA4_ID` | Mesure GA4 (utilisé seul si pas de GTM) | `G-XXXXXXXXXX` |
| `PUBLIC_ADS_ID` | ID compte Google Ads | `AW-XXXXXXXXX` |
| `PUBLIC_ADS_LABEL_FORM` | Conversion Label "Formulaire" | `aBcDeFgHi` |
| `PUBLIC_ADS_LABEL_CALL` | Conversion Label "Appel" | `aBcDeFgHi` |
| `PUBLIC_ADS_LABEL_WHATSAPP` | Conversion Label "WhatsApp" | `aBcDeFgHi` |
| `PUBLIC_PHONE` | Numéro CTA principal (E.164) | `+33623531955` |
| `PUBLIC_PHONE_DISPLAY` | Numéro CTA principal (affiché) | `06 23 53 19 55` |
| `PUBLIC_PHONE_OFFICE` | Standard agence (E.164) | `+33493160631` |
| `PUBLIC_PHONE_OFFICE_DISPLAY` | Standard agence (affiché) | `04 93 16 06 31` |
| `PUBLIC_WHATSAPP` | Numéro WhatsApp sans `+` | `33623531955` |
| `PUBLIC_EMAIL` | Email de contact | `contact@azur-life.com` |
| `PUBLIC_SITE_URL` | URL absolue du site déployé | `https://landing.azur-life.com` |
| `PUBLIC_FORM_ENDPOINT` | Endpoint POST pour le formulaire | `https://formspree.io/f/xxx` |

Sur Cloudflare Pages / Netlify / Vercel : ces variables se configurent dans le dashboard du projet (préfixe `PUBLIC_` obligatoire pour qu'Astro les expose au client).

---

## 4. Téléphone : pourquoi `06 23 53 19 55` et pas `04 93 16 06 31` ?

**Décision documentée à valider.** La masterclass mentionne un **call asset** Google Ads au numéro `06 23 53 19 55`. Le fichier `azur life.md` mentionne :
- standard agence : `04 93 16 06 31`
- mobile direct Natalia : `+33 6 23 53 19 55` (à un chiffre près du call asset)

**Choix pour les landing pages :** CTA principal = `06 23 53 19 55` (call-asset parity), parce que Google Ads attribue précisément les appels qui passent par ce numéro. Le standard agence reste affiché dans le bandeau "Contact" en bas de page pour les visiteurs qui veulent l'office.

**À faire côté client :**
1. **Confirmer** que `06 23 53 19 55` est bien le numéro suivi dans les ads (et qu'il sonne sur le bon poste).
2. **Confirmer** que WhatsApp est activé sur `+33 6 23 53 19 55` (sinon utiliser `…53`, le mobile direct Natalia, mis à jour dans `.env` via `PUBLIC_WHATSAPP=33623531953`).
3. Si conflit, mettre à jour `.env` — pas besoin de toucher au code.

---

## 5. Tracking — Consent Mode v2 + GTM + Enhanced Conversions

### Architecture

- `<head>` : snippet **Consent Mode v2 default-DENIED** chargé en TOUT PREMIER → puis GTM. Conforme RGPD/UE/UK.
- Cookie banner : 2 boutons (Accepter / Refuser) → push `gtag('consent','update', {...})` + persiste dans `localStorage` (`al_consent_v2`). Le lien "Gestion des cookies" du footer rouvre le banner.
- Sans accord, Consent Mode envoie des **pings anonymes** : Google modélise les conversions manquantes (cf. masterclass §2.3).

### Événements `dataLayer` poussés automatiquement

| Trigger DOM | Event | Payload |
|---|---|---|
| Click sur `a[href^="tel:"]` | `phone_click` | `{ phone_number, link_text, page_path }` |
| Click sur `a[href*="wa.me/"]` | `whatsapp_click` | `{ link_text, page_path }` |
| Form submit OK | `generate_lead` | `{ form_id, page_path, value, currency, user_data: { email_address, phone_number, address: { first_name, last_name, country } } }` |

> ⚠️ **Enhanced Conversions :** on transmet email/téléphone **en clair** dans `user_data`. Le Google Tag (chargé par GTM) hash en SHA-256 automatiquement avant envoi à Google. Ne **pas** pré-hasher en JS — c'est l'ancienne guidance, et ça casse la conversion en double-hash.

### Recette GTM (à faire une fois)

1. **Conversion Linker** sur toutes les pages (stocke le `gclid`).
2. Pour chacune des 3 conversions Google Ads (Formulaire, Appel, WhatsApp) :
   - **Trigger** : Custom Event = `generate_lead` / `phone_click` / `whatsapp_click`.
   - **Tag** : "Google Ads Conversion Tracking" avec `PUBLIC_ADS_ID` + le label correspondant.
   - **Enhanced Conversions** : activée, source = "Code", variables = mappées sur `{{DLV - event.user_data.email_address}}` etc.
3. **GA4 Configuration tag** : déclenche sur tous les events (Initialization). Les 3 events ci-dessus deviennent automatiquement des events GA4 avec les mêmes paramètres.
4. **Tester en GTM Preview** (cf. masterclass §2.4) : ne lancer les campagnes que quand Google Ads affiche "Enregistrement de conversions" sur les 3 actions.

---

## 6. JSON-LD inclus

Toutes les pages embarquent :
- `RealEstateAgent` (siège, tel, email, langues parlées, zones servies, geo)
- `BreadcrumbList`
- `FAQPage` — **mirroré verbatim** sur le FAQ visible (exigence Google : sinon désactivation des rich results).

FR :
- 4 entités `Service` (succession, IFI, divorce, judiciaire) avec URL `?intent=` correspondante.

RU :
- 1 entité `Service` "Property Management" avec `offers` (4 000 €/an apt, 7 200 €/an villa).

À tester après déploiement : [Rich Results Test](https://search.google.com/test/rich-results) + [Schema Validator](https://validator.schema.org/).

---

## 7. Performance — pourquoi c'est rapide

- **0 kb de JS framework** — Astro ne ship aucun runtime React/Vue. Les "islands" sont du vanilla < 5 kb gzip total.
- **Fonts auto-hébergées** (Astro Fonts API) → woff2 subsettés latin+cyrillic, préchargés, `font-display: swap`. Zéro requête vers `fonts.gstatic.com`.
- **CSS Tailwind 4** purgé au build → ~6 kb gzip.
- **SVG inline** pour le hero, le sceau, les icônes → zéro requête image au-dessus du fold → LCP ~< 1 s.
- **Google Maps lazy-loaded** uniquement après click sur "Afficher la carte" — pas de hit Maps API au load.
- **HTML compressé**, CSS minifié via Lightning CSS, assets hashés.
- **`prefers-reduced-motion`** respecté (anim "stamp" du sceau désactivée).

Objectif Lighthouse mobile : **98–100** Performance, **100** Accessibility / Best Practices / SEO. À vérifier après remplacement des IDs (GTM ajoute du poids selon les tags du conteneur).

Levier supplémentaire si GTM devient lourd : activer `@astrojs/partytown` pour offloader GTM sur un worker thread. À ajouter en 5 lignes si besoin — pas de réécriture.

---

## 8. Déploiement (Cloudflare Pages recommandé — gratuit, edge mondial)

1. Push le repo sur GitHub.
2. Sur Cloudflare Pages → "Connect to Git" → sélectionner le repo.
3. Build settings :
   - Framework preset : **Astro**
   - Build command : `pnpm install && pnpm build`
   - Build output directory : `dist`
   - Node version : `20`
4. Onglet "Environment variables" → coller le contenu de `.env` (sans guillemets).
5. Custom domain : pointer `landing.azur-life.com` (CNAME vers le `.pages.dev`).

Alternatives identiques en simplicité : Netlify, Vercel, OVH "Web Static".

---

## 9. À fournir / valider par le client

### Assets visuels manquants (placeholders en place actuellement)

| Asset | Statut | Notes |
|---|---|---|
| Logo Azur Life (SVG préféré) | placeholder (wordmark "AZUR LIFE") | utilisé dans header, footer, favicon |
| Favicon set (PNG 192/512, ICO) | minimal `favicon.svg` posé | générer le set complet à partir du logo final |
| OG image FR `public/og/fr-expertise-cover.jpg` (1200×630) | manquant | partage social, fallback inclus dans `og:image:url` |
| OG image RU `public/og/ru-pm-cover.jpg` (1200×630) | manquant | idem |
| Portrait Natalia (RU page, optionnel) | non inclus | pas de photo fabriquée — à ajouter dans `public/team/natalia.jpg` puis insérer dans `ru/property-management.astro` si souhaité |
| Photo extérieure office Beaulieu (optionnel) | non inclus | à mettre dans `public/contact/office.jpg` |
| Widget reviews Google ou 3–5 témoignages vérifiés | **non inclus** (rien de fabriqué) | brancher Trustpilot / Google Reviews via GTM ou ajouter manuellement quand validés |

### Configurations à brancher

| Élément | Action |
|---|---|
| **GTM container ID** | créer le conteneur, coller dans `PUBLIC_GTM_ID` |
| **GA4 measurement ID** | créer la propriété GA4, coller `PUBLIC_GA4_ID` |
| **Google Ads conversion ID + 3 labels** | créer 3 conversions (Form, Appel, WhatsApp) — cf. masterclass §2.1 |
| **Form backend** | choisir Formspree / Apps Script / webhook CRM → URL dans `PUBLIC_FORM_ENDPOINT`. Tant qu'il n'est pas branché, le form simule un succès en console (pour QA tracking). |
| **Confirmer WhatsApp** sur `+33 6 23 53 19 55` | si non, mettre `…53` dans `PUBLIC_WHATSAPP` |
| **Pages légales** | `/mentions-legales` et `/politique-confidentialite` sont des liens placeholder dans le footer — à créer (peut être sur le site principal `azur-life.com`) |
| **Domaine** | déployer sur `landing.azur-life.com` (sous-domaine dédié recommandé pour ne pas toucher au site principal) |

---

## 10. Édition du contenu (workflow non-dev)

Tout le copy vit dans deux fichiers :
- `src/content/fr.ts` — page FR
- `src/content/ru.ts` — page RU

Format : objet TypeScript typé, lisible. Modifier un texte = éditer la chaîne, push, build auto.

Ne pas toucher aux structures (clés `kicker`, `title`, etc.) — uniquement les valeurs (les chaînes entre guillemets).

---

## 11. Conformité avec la masterclass

| Décision masterclass | Implémentation |
|---|---|
| **Send each ad group to the most specific page** | 1 page FR + 4 variantes hero par `?intent=` (par groupe) + 1 page RU dédiée |
| **Quality Score : landing page ≈ 39 %** | LCP < 1 s, mobile-first, 0 JS framework, fonts self-host, SVG inline |
| **Consent Mode v2 obligatoire** | snippet default-denied avant GTM + cookie banner wired |
| **3 conversions distinctes** (Form / Appel / WhatsApp) | 3 events `dataLayer` séparés, recettes GTM dans §5 |
| **Enhanced Conversions** | `user_data` en plain text, hashing délégué au Google Tag |
| **Annonces RU "Наталья — носитель русского языка"** | repris mot-pour-mot dans hero RU |
| **Exclusion "pas Airbnb/conciergerie"** | section dédiée "Что мы НЕ делаем" en ПУНКТ 01 RU |
| **CTA discipline** | UN seul bouton primaire `var(--color-seal)` par page (Call FR / WhatsApp RU) |
| **No exit nav in PPC LP** | header sans menu, juste logo + 2 CTAs |
| **Schema FAQPage verbatim** | builder `faqPage()` consomme la même donnée que le composant `<FAQ>` |

---

## 12. Limites & non-fait (assumés)

- Pas de back-end formulaire (à brancher — voir §9).
- Pas de pages légales (à créer côté client, liens placeholder dans le footer).
- Pas de témoignages clients (non fabriqués — à intégrer quand fournis).
- Pas de A/B testing intégré : utiliser **Google Ads Experiments** côté compte (recommandation masterclass).
- Pas de CMP avancé : le cookie banner intégré est un point de départ conforme. Pour un CMP complet (CookieYes, Axeptio, Didomi), le brancher via GTM sans modifier le code.

---

## 13. Structure du repo

```
azur-life/
├── astro.config.mjs       ← config + fonts API + sitemap
├── tailwind.config.mjs    ← (via @tailwindcss/vite)
├── tsconfig.json
├── package.json
├── public/
│   ├── robots.txt
│   ├── favicon.svg
│   └── og/                ← OG images (à fournir)
├── src/
│   ├── layouts/BaseLayout.astro
│   ├── components/        ← Header, Hero, Seal, BlueprintVilla, StewardshipVilla, ServiceCard, PricingCard, ProcessSteps, FAQ, LeadForm, ContactStrip, StickyMobileCTA, CookieBanner, Footer, TrustPills
│   ├── content/
│   │   ├── fr.ts          ← tout le copy FR
│   │   └── ru.ts          ← tout le copy RU
│   ├── lib/
│   │   ├── constants.ts   ← env vars + phone/wa/address
│   │   ├── tracking.ts    ← dataLayer push helpers
│   │   └── schema.ts      ← JSON-LD builders
│   ├── styles/global.css  ← design tokens + Tailwind
│   └── pages/
│       ├── index.astro                       ← splash bilingue
│       ├── expertise-immobiliere.astro       ← FR
│       └── ru/property-management.astro      ← RU
└── README.md
```
