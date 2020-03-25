const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes)
/**
 * Rota / Recurso
 */

/**
 * Método HTTP
 * 
 * GET: Buscar uma informaçào do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados e enviados na rota após o ? (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table
 */



app.listen(3333);