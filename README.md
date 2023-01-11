# bigger-picture-error
Repo to demostrate the bigger picture error.

Local images (from the static folder) produce the below error when you click to enlarge the image.  This is the only error message that's produced, but you'll notice that the enlarged image is... weird..  I think it's *both* the intended large version with the thumbnails - you'll see what I mean.

This is a minimal repo (enjoy, but enjoy minimally).  Most of the bigger-picture functionality is taken from https://github.com/henrygd/bigger-picture-examples/blob/main/sveltekit-basic/src/lib/masonry-gallery.svelte 

```
client.js?t=1673409339167&v=0edd5263:207 Uncaught (in promise) Error: Attempted to preload a URL that does not belong to this app: http://localhost:5173/masashi-wakui/masashi-wakui-misc-10.jpeg
    at preload_data (client.js?t=1673409339167&v=0edd5263:207:10)
    at preload (client.js?t=1673409339167&v=0edd5263:1184:6)
    at client.js?t=1673409339167&v=0edd5263:1145:5
```

