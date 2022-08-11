## Gatsby Image "onLoad" Issue

Repository to demonstrate issue with how Gatsby Image triggers the `onLoad` event for images

### Steps to re-produce
- clone repository
- run `npm ci && npm run build && npm run serve`
- disable caching in the browser. In Chrome, this can be done in the network tab
- open `http://localhost:9000/test`. To be safe, do so in a "private"/"incognito" window

### Expected Behavior
- When page loads, the 3 images load in
- each image triggers the `onLoad` prop passed in to them which updates the "Images Loaded" object.
- End result should be `{ 0: true, 1: true, 2: true }`

### Observed Behavior
- When page loads, the 3 images correctly load in, _however_ they do not each trigger their own `onLoad` prop
- behavior is inconsistent across page loads; the most consistent way is to have a "fresh" private window
- this issue does not occur once image is cached

### Other notes
- I've tested this across browsers with similar results
- I do not see this behavior when using the `<img>` tag with the native `onLoad` attribute
- Interestingly, this issue does not occur when running `gatsby develop`
