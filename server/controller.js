module.exports= {
    getProduct: (req, res) =>{
      const db = req.app.get('db');
      const {id} = req.params;
      db.get_product(id).then(response =>{
        const data = response[0];
        res.status(200).send(data);
      })
    },
    getInventory: (req, res) => {
      const db = req.app.get('db')
      db.get_inventory().then(results => {
        res.status(200).send(results)
      }).catch(err => res.status(500).send(err))
    },
    addProduct: (req, res) => {
      const db = req.app.get('db')
      const {name, price, imgurl} = req.body
      console.log(req.body)
      db.add_product([name, price, imgurl]).then(results => {
        res.sendStatus(200)
      }).catch(err => res.status(500).send(err))
    },
    editProduct: (req, res) => {
      const db = req.app.get('db')
      const {id} = req.params
      const {name, price, imgurl} = req.body
      db.edit_product([id, name, price, imgurl]).then(results => {
        res.sendStatus(200)
      }).catch(err => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
      const db = req.app.get('db')
      const {id} = req.params
      db.delete_product(id).then(results => {
        res.status(200).send(results)
      }).catch(err => res.status(500).send(err))
    }
  }
  