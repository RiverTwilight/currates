# Contribution

```bash
pnpm run dev # Start Rollup server
pnpm run dev:style # Start Tailwind server
```

The you can load the unpacked extension from `dist` in the extension setting page.

Open `test/index.html` to test the extension by selecting text on it.

## How hot-load server works

Do not modify `manifest.json` directly in the `dist` folder. Edit `init.js` instead.

## How it works

After user opened a webpage, the extension will:

1. Create a shadow root node in the original page
2. Render React app to the root
3. Inject prefixed style to the page
4. The React app listen to the mouse event
