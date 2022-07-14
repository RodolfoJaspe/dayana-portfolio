const router = require("express").Router()
const Videos = require("./videos-model")

router.get("/:id", ( req, res, next ) => {
    Videos.getVideos(req.params.id)
        .then(Videos => {
            console.log(Videos)
            res.status(200).json(Videos)
        }).catch(err => {
            next(err)
        })
})

router.post("/", async ( req, res, next ) => {
    try{
        const video = await Videos.createVideo(req.body)
        console.log(video)
        res.status(201).json(video)
    }catch(err){
        next(err)
    }
})

router.delete("/:id", ( req, res, next ) => {
    Videos.deleteVideo(req.params.id)
        .then(video => {
            res.status(200).json(video)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router
