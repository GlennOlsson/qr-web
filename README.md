# Glenn's QR site
Website for the landing page of my QR codes

## Files
### `site/`
Files for the website itself

### `nginx.conf`
The nginx config file for the subdomain. Is symlinked from `/etc/nginx/sites-enabled`

### Hook
To automatically build the site on `git pull`, create a file `.git/hooks/post-merge` with the following content
```bash
#!/bin/bash

CHANGED_FILES=$(git diff --name-only HEAD@{1} HEAD)

if echo "$CHANGED_FILES" | grep -q "^site/qr-site/"; then
  echo "Changes detected in site/qr-site/, running build script..."
  ./build-site.sh
else
  echo "No changes in site/qr-site/, skipping build."
fi
```
and make it executable
```bash
chmod +x .git/hooks/post-merge
```

This ensures the website is build when and only when a change has been made to the source code, but not if eg. the build script or nginx config is changed.
