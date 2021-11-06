# define a imagem
FROM node
# define a pasta onde ficará o app
WORKDIR /usr/app
# copia o package json para a pasta da aplicação
COPY package.json ./
# instala as depedências na imagem do docker
RUN npm install
# copia as depedência  para a pasta da aplicação
COPY . .
# define a posta de comunicação com a imagem
EXPOSE 3333
# inicia a aplicação
CMD ["npm", "run", "dev"]