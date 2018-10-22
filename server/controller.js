
module.exports = {
    
    read: (req,res)=>{
        const db = req.app.get('db');
        db.get_houses()
        .then(houses =>res.status(200).send(houses))
        .catch(error => {
            res.status(500).send({errorMessage: "error in controller.read"});
            console.log(error)})
    },

    create: (req,res)=>{
        const db = req.app.get('db');
        const { name, address, city, state, zip, image, monthly_mortgage, amount, desired_rent } = req.body;
        db.create_house( [ name, address, city, state, zip, image, monthly_mortgage, amount, desired_rent ] )
        .then((house) => res.status(200).send(house))
        .catch(error => {
            res.status(500).send({errorMessage: "error in controller.create"});
            console.log(error)})
        
    },

    delete: (req,res)=>{
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_house([id])
        .then((response) => res.status(200).send(response))
        .catch(error => {
            res.status(500).send({errorMessage: "error in controller.delete"});
            console.log(error)}) 
    }
}