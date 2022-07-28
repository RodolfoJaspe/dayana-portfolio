const db = require("../../data/db-config.js")

const getAllUsers = () => {
    return db("users")
}

const getUser = (user_id) => {
    const user = db("users").where({user_id}).first()
    return user
}

function findBy(filter){ 
    return db("users").where(filter).first()
}

async function createUser(user) {
    return db
        .insert(user)
        .into("users")
        .returning("*")
        .then(rows => {
            return rows[0]
        })
}

async function updateUser(user_id, biography){
    await db('users')
        .where({user_id})  
        .update(biography);
    return getUser(user_id)
}

const deleteUser = async (id) => {
    await db("users").where("user_id",id).delete()
}


module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  findBy
}
