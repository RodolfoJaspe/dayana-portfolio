const db = require("../../../data/db-config.js")

const getHeadshots = (user_id) => {
    console.log(user_id)
    const headshots = db("headshots").where({user_id})
    console.log(headshots)
    return headshots
}

const getHeadshot = (id) => {
    return db("headshots").where({id}).first()
}

const createHeadshot = (headshot) => {
    console.log(headshot)
    return db
        .insert(headshot)
        .into("headshots")
        .returning("*")
        .then(rows => {
            return rows[0]
        })
}

const deleteHeadshot = async (id) => {
    const deletedHeadshot = await getHeadshot(id) 
    await db("headshots").where({id}).delete()
    return deletedHeadshot
}

module.exports = {
    getHeadshots,
    getHeadshot,
    createHeadshot,
    deleteHeadshot
}