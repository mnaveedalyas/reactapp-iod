FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
#CMD ["react-scripts", "start" ]
CMD ["npm", "run", "start"]
EXPOSE 3000
