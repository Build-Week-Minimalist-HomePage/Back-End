
exports.up = function(knex) {
    return knex.schema
        .createTable('notes', tbl => {
            tbl.increments();
        
            tbl.string('note', 512)

            tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        })

        .createTable('links', tbl => {
            tbl.increments();
        
            tbl.string('link_name', 128)
            tbl.string('link_url', 256).notNullable();

            tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        })

        .createTable('config', tbl => {
            tbl.increments();
        
            tbl.string('theme', 64).notNullable();
            tbl.string('layout', 64).notNullable();
            tbl.string('pluginOption', 64).notNullable();

            tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        });
};

exports.down = function(knex) {
            return knex.schema
            .dropTableIfExists('notes')
            .dropTableIfExists('links')
            .dropTableIfExists('config');
};
