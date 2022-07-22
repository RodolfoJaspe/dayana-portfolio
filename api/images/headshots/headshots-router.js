const router = require("express").Router()
const Headshots = require("./headshots-model")

router.get("/:id", ( req, res, next ) => {
    Headshots.getHeadshots(req.params.id)
        .then(headshots => {
            console.log(headshots)
            res.status(200).json(headshots)
        }).catch(err => {
            next(err)
        })
})

router.post("/", async ( req, res, next ) => {
    try{
        const headshot = await Headshots.createHeadshot(req.body)
        console.log(headshot)
        res.status(201).json(headshot)
    }catch(err){
        console.log(err)
        next(err)
    }
})

router.delete("/:id", ( req, res, next ) => {
    Headshots.deleteHeadshot(req.params.id)
        .then(headshot => {
            res.status(200).json(headshot)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router
