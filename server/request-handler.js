const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connection = 'postgres://db:5432/useraddress';

var client = new pg.Client(connection);
client.connect();

exports.addAddress = (req, res) => {
  const results = [];
  const address = req.body;
  const query = client.query('INSERT INTO Address(streetaddress, city, country, postalcode,createdAt, deleted, status) values ($1, $2, $3, $4, $5, $6, $7)', [address.streetaddress, address.city, address.country, address.postalcode,address.createdAt, address.deleted,address.status]);
  query.on('row', (row) => {
    results.push(row);
  })
  query.on('end', () => {
    return res.json(results);
  });
};

exports.getActiveAddresses = (req, res) => {
  const activeAddresses = [];
  const query = client.query('SELECT * FROM Address WHERE deleted = false');
  query.on('row', (row) => {
    activeAddresses.push(row);
  });
  query.on('end', () => {
    return res.json(activeAddresses);
  });
};

exports.getDeletedAddresses = (req, res) => {
  const deletedAddresses = [];
  const query = client.query('SELECT * FROM Address WHERE deleted = true');
  query.on('row', (row) => {
    deletedAddresses.push(row);
  });
  query.on('end', () => {
    return res.json(deletedAddresses);
  });
};

exports.updateAddress = (req, res) => {
  const results = [];
  const id = req.body.id;
  const deleted = req.body.deleted;
  console.log(deleted, id);
  const query = client.query('UPDATE Address SET deleted = $1 WHERE id = $2', [deleted, id]);
  query.on('row', (row) => {
    results.push(row);
  })
  query.on('end', () => {
    return res.json(results);
  });
};

exports.deleteAddress = (req, res) => {
  const results = [];
  const query = client.query('DELETE FROM Address WHERE Address.id = $1', [req.body.id]);
  query.on('row', (row) => {
    results.push(row);
  })
  query.on('end', () => {
    return res.json(results);
  });
};
