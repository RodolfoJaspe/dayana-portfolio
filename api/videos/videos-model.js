const db = require("../../data/db-config.js")

const getVideos = (user_id) => {
    console.log(user_id)
    const videos = db("videos").where({user_id})
    console.log(videos)
    return videos
}

const getVideo = (id) => {
    return db("videos").where({id}).first()
}

const createVideo = (video) => {
    console.log(video)
    return db
        .insert(video)
        .into("videos")
        .returning("*")
        .then(rows => {
            return rows[0]
        })
}

const deleteVideo = async (id) => {
    const deletedVideo = await getVideo(id) 
    await db("videos").where({id}).delete()
    return deletedVideo
}

module.exports = {
    getVideos,
    getVideo,
    createVideo,
    deleteVideo
}