const db = require("../../data/db-config.js")

const getVideos = (user_id) => {
    console.log(user_id)
    const videos = db("videos").where({user_id})
    console.log(videos)
    return videos
}

const getVideo = (video_id) => {
    return db("videos").where({video_id}).first()
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

const deleteVideo = async (video_id) => {
    const deletedVideo = await getVideo(video_id) 
    await db("videos").where({video_id}).delete()
    return deletedVideo
}

module.exports = {
    getVideos,
    getVideo,
    createVideo,
    deleteVideo
}