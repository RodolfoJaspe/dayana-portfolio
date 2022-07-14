const db = require("../../../data/db-config.js")

const getOnstage = (user_id) => {
    console.log(user_id)
    const onstage = db("onstage").where({user_id})
    console.log(onstage)
    return onstage
}

const getSingleOnstage = (onstage_id) => {
    return db("onstage").where({onstage_id}).first()
}

const createOnstage = (onstage_image) => {
    console.log(onstage_image)
    return db
        .insert(onstage_image)
        .into("onstage")
        .returning("*")
        .then(rows => {
            return rows[0]
        })
}

const deleteOnstage = async (onstage_id) => {
    const deletedOnstage = await getSingleOnstage(onstage_id) 
    await db("onstage").where({onstage_id}).delete()
    return deletedOnstage
}

module.exports = {
    getOnstage,
    getSingleOnstage,
    createOnstage,
    deleteOnstage
}