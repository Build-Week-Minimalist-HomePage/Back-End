const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findByUserId,
    update,
    remove
  };

function find() {
    return db('links').select('id', 'user_id', 'link_name', 'link_url');
}

function findBy(filter) {
    return db('links').where(filter);
}
  
async function add(link) {
    const [id] = await db('links').insert(link);

    return findById(id);
}
  
function findById(id) {
    return db('links')
    .select('id', 'user_id', 'link_name', 'link_url')
        .where({ id })
        .first();
}

function findByUserId(user_id) {
    return db('links')
    .select('id', 'user_id', 'link_name', 'link_url')
        .where({ user_id });
}

function update(changes, id) {
    return db('links')
    .update(changes)
    .where('id', id)
    .then(() => {
        return findById(id)
    })
}

function remove(id) {
    findById(id).then(selectedLink => {
        link = selectedLink;
    })
    return db('links')
    .where('id', id)
    .del()

}