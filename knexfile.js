const path = require("path");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL + "?sslmode=require",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL + "?sslmode=require",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
