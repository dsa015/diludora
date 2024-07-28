/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o72kibw8d4flsie")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxwtmck5",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o72kibw8d4flsie")

  // remove
  collection.schema.removeField("lxwtmck5")

  return dao.saveCollection(collection)
})
