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
    return db('config').select('id', 'user_id', 'theme', 'layout', 'pluginOption1', 'pluginOption2', 'pluginOption3', 'pluginOption4');
}

function findBy(filter) {
    return db('config').where(filter);
}
  
async function add(config) {
    const [id] = await db('config').insert(config);

    return findById(id);
}
  
function findById(id) {
    return db('config')
    .select('id', 'user_id', 'theme', 'layout', 'pluginOption1', 'pluginOption2', 'pluginOption3', 'pluginOption4')
        .where({ id })
        .first();
}

function findByUserId(user_id) {
    return db('config')
    .select('id', 'user_id', 'theme', 'layout', 'pluginOption1', 'pluginOption2', 'pluginOption3', 'pluginOption4')
        .where({ user_id });
}

function update(changes, id) {
    return db('config')
    .update(changes)
    .where('id', id)
    .then(() => {
        return findById(id)
    })
}

function remove(id) {
    findById(id).then(selectedConfig => {
        config = selectedConfig;
    })
    return db('config')
    .where('id', id)
    .del()

}