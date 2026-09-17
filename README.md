# Barber Shop Local Demo

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

The current build uses remote barber/salon fallback images. For a sales-ready client demo, add the real photos to `public/photos/` and replace the `image` values in `src/main.jsx`, for example:

```js
image: "/photos/fachada.jpg"
```
