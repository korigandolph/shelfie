module.exports = {
    getInventory:(req, res)=>{
        const db = req.app.get('db');

        db.get_inventory()
        .then(response=> res.status(200).send(response))
        .catch(err=>{
            res.status(500).send({errorMessage: 'Something broke'})
            console.log(err)
        })
    },
    addProduct: (req, res) =>{
        const db = req.app.get('db')
        const {name, price, imgurl} = req.body

        db.add_product ()
        .then(response=> res.status(200).send(response))
        .catch(err=>{
            res.status(500).send({errorMessage: 'Something broke'})
            console.log(err)
    })
    }   
}