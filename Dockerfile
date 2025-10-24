FROM nginx:alpine
# Vite outputs to dist/
COPY dist/ /usr/share/nginx/html

# SPA-friendly routing (refresh on /route works)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
