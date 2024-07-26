/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2kt2i83qhwfnfv2")

  collection.name = "ingredients"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2kt2i83qhwfnfv2")

  collection.name = "Ingredients"

  return dao.saveCollection(collection)
})
