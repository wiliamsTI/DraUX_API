const swaggerSpect = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API BLOG',
      version: '1.0.0',
      description:
        'Documentation de la API hecha con express, sequelize y postgresql',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Localhost',
      },
      {
        url: 'https://arcane-castle-52549.herokuapp.com/api/v1',
        description: 'Heroku',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerSpect;