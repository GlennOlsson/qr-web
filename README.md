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
./built-site.sh
```
and make it executable
```bash
chmod +x .git/hooks/post-merge
```
