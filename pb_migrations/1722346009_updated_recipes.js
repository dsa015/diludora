/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o72kibw8d4flsie")

  // remove
  collection.schema.removeField("gjhewt9x")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o72kibw8d4flsie")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjhewt9x",
    "name": "field",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "a",
        "b",
        "c"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
