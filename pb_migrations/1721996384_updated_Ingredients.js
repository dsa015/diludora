/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2kt2i83qhwfnfv2")

  // remove
  collection.schema.removeField("4xaihpor")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "drptu0y7",
    "name": "recipeId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "o72kibw8d4flsie",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2kt2i83qhwfnfv2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4xaihpor",
    "name": "recipeId",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("drptu0y7")

  return dao.saveCollection(collection)
})
