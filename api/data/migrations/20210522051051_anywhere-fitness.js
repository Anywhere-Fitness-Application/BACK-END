//exports.up = async (knex) => {
   // await knex.schema
    //  .createTable('users', (users) => {
   //     users.increments('user_id')
   //     users.string('user_username', 200).notNullable()
   //     users.string('user_password', 200).notNullable()
   //     users.string('user_email', 320).notNullable()
   //     users.timestamps(false, true)
   //   })
 // }
  
 // exports.down = async (knex) => {
//    await knex.schema.dropTableIfExists('users')
 // }
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
    .dropTableIfExists("roles")
    
  }