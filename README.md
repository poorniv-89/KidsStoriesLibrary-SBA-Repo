The Kids Story Library is a service that allows users to manage and interact with a collection of kids' stories. 
The API provides routes to create, read, update and delete data related to three key collections: Authors, Stories and Kids. 
The data is stored and managed using MongoDB and Mongoose which simplifies interaction with MongoDB.


**What You Can Do with This API:**

**Authors:** Create and delete authors.

**Stories:** Read stories by genre and retrieve a story by id.

**Kids:** Read all Kids details and uodate Kids details.

This API helps you easily manage authors, stories, and kids in a library of kids' stories.

| **Collection** | **Operations**           | **Method** | **URL**                                                | **Sample Data**                                         | **Description**                                   |
|----------------|--------------------------|------------|--------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------|
| **Authors**    | Create                   | POST       | `/api/authors`                                          | `{ "name": "George Orwell", "bio": "English writer", "stories": ["1984"], "birthDate": "1903-06-25" }` | Adds a new author to the database.               |
|                | Delete                   | DELETE     | `/api/authors/:id`                                      |                                  | Deletes an author by their unique ID.            |
| **Stories**    | Read (by genre)          | GET        | `/api/stories/search?genre=Adventure`                   |                            | Retrieves stories filtered by a specific genre.  |
|                | Read (by ID)             | GET        | `/api/stories/:id`                                      |                                | Retrieves a specific story by its unique ID.     |
| **Kids**       | Read (all details)       | GET        | `/api/kids`                                            |                | Retrieves details of all kids in the database.   |
|                | Update (by ID)           | PATCH      | `/api/kids/:id`                                         | `{ "name": "Karl Marx", "age": 10, "favoriteGenre": "Adventure" }` | Updates details of a kid by their unique ID.     |

