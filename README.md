# Ambit diff demo

This repo shows the difference between a code diff and an authority diff.

- [PR #1 — one-line `fetch` addition](https://github.com/sano-suguru/ambit-diff-demo/pull/1/files)  
  A one-line change gives `currentRate`, `applyTax`, and `priceOrder` new network authority. Ambit shows the call path.

- [PR #2 — larger code change, no authority increase](https://github.com/sano-suguru/ambit-diff-demo/actions/runs/34960907199)  
  The code changes more, but no function gains new authority. Ambit reports `No authority increased.`

No contracts or Ambit config are used. The workflow runs `ambit-ts@0.2.0` in advisory, non-blocking mode.
