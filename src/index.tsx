import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          tittle: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 600,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          tittle: 'Conta de luz',
          type: 'withdraw',
          category: 'Dev',
          amount: 250,
          createdAt: new Date('2021-02-17 11:30:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction') })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);