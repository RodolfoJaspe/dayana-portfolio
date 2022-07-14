const db = require("../../../data/db-config.js")

const getOnset = (user_id) => {
    console.log(user_id)
    const onset = db("onset").where({user_id})
    console.log(onset)
    return onset
}

const getSingleOnset = (onset_id) => {
    return db("onset").where({onset_id}).first()
}

const createOnset = (onset_image) => {
    console.log(onset_image)
    return db
        .insert(onset_image)
        .into("onset")
        .returning("*")
        .then(rows => {
            return rows[0]
        })
}

const deleteOnset = async (onset_id) => {
    const deletedOnset = await getSingleOnset(onset_id) 
    await db("onset").where({onset_id}).delete()
    return deletedOnset
}

module.exports = {
    getOnset,
    getSingleOnset,
    createOnset,
    deleteOnset
}