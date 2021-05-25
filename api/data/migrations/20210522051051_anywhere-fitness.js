exports.up = function(knex) {
  return knex.schema.createTable("roles", tbl => {
    tbl.increments();
    tbl.string ("name",128).notNullable().unique()
  })
  .createTable("instructors", tbl => {
    tbl.increments()
    tbl.string("inst_username",128).notNullable().unique()
    tbl.string("inst_password",128).notNullable()
    tbl.integer("role")
    .notNullable()
    .unsigned()
    .references("id")
    .inTable("roles")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
  })
}

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("instructors")
}