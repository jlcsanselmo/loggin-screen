# 1. Usar uma imagem leve do Node.js como base
FROM node:18-alpine

# 2. Definir a pasta de trabalho dentro do container
WORKDIR /app

# 3. Copiar os arquivos de dependências (package.json) e instalar
COPY package*.json ./
RUN npm install

# 4. Copiar o restante do código do frontend
COPY . .

# 5. Expor a porta que o Vite usa por padrão (5173)
EXPOSE 5173

# 6. Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]