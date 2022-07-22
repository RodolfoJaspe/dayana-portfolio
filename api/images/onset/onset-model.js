const db = require("../../../data/db-config.js")

const getOnset = (user_id) => {
    console.log(user_id)
    const onset = db("onset").where({user_id})
    console.log(onset)
    return onset
}

const getSingleOnset = (id) => {
    return db("onset").where({id}).first()
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

const deleteOnset = async (id) => {
    const deletedOnset = await getSingleOnset(id) 
    await db("onset").where({id}).delete()
    return deletedOnset
}

module.exports = {
    getOnset,
    getSingleOnset,
    createOnset,
    deleteOnset
}