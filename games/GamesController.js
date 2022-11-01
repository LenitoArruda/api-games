const express = require("express");
const router = express.Router();
const Game = require("./Game");
const slugify = require("slugify");

router.get("/games", (req, res) => {
    
    Game.findAll({
        order: [
            ['title', 'ASC']
        ]
    }).then(games => {
        res.statusCode = 200;
        res.json(games);
    }).catch(err =>{
        console.log(err);
    });
       
});

router.get("/game/:id", (req,res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id= parseInt(req.params.id);

        Game.findByPk(id).then(game => {
            if(game != undefined){
                res.statusCode = 200;
                res.json(game);
            }else{
                res.sendStatus(404);
            }
        }).catch(err => {
            console.log(err);
        });
        
    }
    
    
});

router.post("/game", (req, res) => {
    var {title,price,year} = req.body;

    Game.create({
        title: title,
        slug: slugify(title),
        price: price,
        year: year
    }).then(() =>{
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    });
    
});

router.put("/game/:id", (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id= parseInt(req.params.id);
        var {title,price,year} = req.body;

        Game.findByPk(id).then(game => {
            if(game != undefined){
                Game.update(
                    {
                        title: title,
                        slug: slugify(title),
                        price: price,
                        year: year
                    },
                    {
                        where: {
                            id: id
                        }
                    }
                    ).then(() => {
                        res.sendStatus(200);
                    }).catch(err => {
                        console.log(err);
                    });
            }else{
                res.sendStatus(404);
            }
        });
        
    }

});


router.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id= parseInt(req.params.id);
        Game.destroy({
            where: {
                id: id
            }
        }).then(() =>{
            res.sendStatus(200);
        }).catch(err => {
            console.log(err);
            res.sendStatus(404);
        });
    }
});



module.exports = router;