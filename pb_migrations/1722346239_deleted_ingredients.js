/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2kt2i83qhwfnfv2");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "2kt2i83qhwfnfv2",
    "created": "2024-07-26 12:19:08.322Z",
    "updated": "2024-07-26 15:16:39.043Z",
    "name": "ingredients",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sqsacpy6",
        "name": "ingredient",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "aazksj8h",
        "name": "amount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
