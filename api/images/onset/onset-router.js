const router = require("express").Router()
const Onset = require("./onset-model")

router.get("/:id", ( req, res, next ) => {
    Onset.getOnset(req.params.id)
        .then(onset => {
            console.log(onset)
            res.status(200).json(onset)
        }).catch(err => {
            next(err)
        })
})

router.post("/", async ( req, res, next ) => {
    try{
        const onset = await Onset.createOnset(req.body)
        console.log(onset)
        res.status(201).json(onset)
    }catch(err){
        next(err)
    }
})

router.delete("/:id", ( req, res, next ) => {
    Onset.deleteOnset(req.params.id)
        .then(onset => {
            res.status(200).json(onset)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router
