/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o72kibw8d4flsie")

  collection.name = "Recipes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o72kibw8d4flsie")

  collection.name = "FoodRecipes"

  return dao.saveCollection(collection)
})
