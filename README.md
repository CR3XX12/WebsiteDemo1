# Teo's Barbershop

Professional demo website for a local barbershop or salon. The content is data-driven inside `src/main.jsx`, so this can become a reusable structure for pitching local businesses.

## Commands

```bash
npm install
npm run dev
npm run build
```

On Windows PowerShell, use `npm.cmd` if script execution blocks `npm`.

## Client Details Included

- Phone / WhatsApp: `+52 55 5516 9106`
- Services and prices from the supplied notes
- Spanish copy for a Mexico City local-business landing page
- WhatsApp booking links with prefilled messages

## Replacing Demo Images

The client photos live in `public/photos/`. To change one, add the new image there and update its `/photos/filename.png` entry in the `galleryImages` array in `src/main.jsx`.

```js
image: "/photos/fachada.jpg"
```
