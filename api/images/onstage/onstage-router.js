const router = require("express").Router()
const Onstage = require("./onstage-model")

router.get("/:id", ( req, res, next ) => {
    Onstage.getOnstage(req.params.id)
        .then(onstage => {
            console.log(onstage)
            res.status(200).json(onstage)
        }).catch(err => {
            next(err)
        })
})

router.post("/", async ( req, res, next ) => {
    try{
        const onstage = await Onstage.createOnstage(req.body)
        console.log(onstage)
        res.status(201).json(onstage)
    }catch(err){
        next(err)
    }
})

router.delete("/:id", ( req, res, next ) => {
    Onstage.deleteOnstage(req.params.id)
        .then(onstage => {
            res.status(200).json(onstage)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router
