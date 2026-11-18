FROM node:22-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY mcp ./mcp
ENV NODE_ENV=production
ENV PORT=8787
EXPOSE 8787
CMD ["npm","run","mcp:start"]
