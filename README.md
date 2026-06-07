# Pre-Leased Commercial Property Website

A responsive landing page for pre-leased commercial property investment enquiries. The website showcases branded tenant options, investment packages, an ROI calculator, lead capture forms, and a dedicated thank-you page after form submission.

## Live Demo

[View Live Website](https://iridescent-empanada-508e50.netlify.app/)

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Font Awesome icons
- FormSubmit for static form email handling
- Netlify for hosting

## Key Features

- Responsive layout for desktop, tablet, and mobile
- Pre-leased brand cards with dynamic popup details
- ROI calculator with dynamic projected return values
- Package-specific enquiry popups
- Contact, call, and WhatsApp CTAs
- Form validation for name, mobile number, email, and consent
- Form submissions sent to `contact@absoluteassets.in`
- Thank-you page redirect after successful form submission
- Optimized brand logo and visual asset structure

## Project Structure

```text
.
├── assets/
│   └── images/
│       ├── banner.webp
│       ├── propsalt-landbase-logo.png
│       └── logo/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── thank-you/
│   └── index.html
├── index.html
└── README.md
```

## Forms

The lead forms use FormSubmit:

```html
https://formsubmit.co/contact@absoluteassets.in
```

After submission, users are redirected to:

```text
/thank-you/
```

Important: FormSubmit may require a one-time email confirmation for `contact@absoluteassets.in` before submissions start delivering normally.

## Local Preview

Because this is a static website, you can open `index.html` directly in a browser.

For a cleaner local server preview:

```bash
npx serve .
```

## Deployment

The project is deployed on Netlify:

[https://iridescent-empanada-508e50.netlify.app/](https://iridescent-empanada-508e50.netlify.app/)

Recommended Netlify settings:

- Publish directory: project root
- Build command: none

## Pages

- `index.html` - Main landing page
- `thank-you/index.html` - Thank-you page after form submission

## Maintainer

Rajat-rj45
