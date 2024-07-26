/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2kt2i83qhwfnfv2")

  // update
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
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u2kyz7jo",
    "name": "unit",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "tsp",
        "tbsp",
        "g"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2kt2i83qhwfnfv2")

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u2kyz7jo",
    "name": "unit",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "tsp",
        "tbsp",
        "g"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
