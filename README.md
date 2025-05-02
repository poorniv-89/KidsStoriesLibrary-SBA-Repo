The Kids Story Library is a service that allows users to manage and interact with a collection of kids' stories. 
The API provides routes to create, read, update and delete data related to three key collections: Authors, Stories and Kids. 
The data is stored and managed using MongoDB and Mongoose which simplifies interaction with MongoDB.


**What You Can Do with This API:**

**Authors:** Create and delete authors.

**Stories:** Read stories by genre and retrieve a story by id.

**Kids:** Read all Kids details and update Kids details.


| **Collection** | **Operations**           | **Method** | **URL**                                                | **Sample Data**                                         | **Description**                                   |
|----------------|--------------------------|------------|--------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------|
| **Authors**    | Create                   | POST       | `/api/authors`                                          | `{ "name": "George Orwell", "bio": "English writer", "stories": ["1984"], "birthDate": "1903-06-25" }` | Adds a new author to the database.               |
|                | Delete                   | DELETE     | `/api/authors/:id`                                      |                                  | Deletes an author by their unique ID.            |
| **Stories**    | Read (by genre)          | GET        | `/api/stories/search?genre=Adventure`                   |                            | Retrieves stories filtered by a specific genre.  |
|                | Read (by ID)             | GET        | `/api/stories/:id`                                      |                                | Retrieves a specific story by its unique ID.     |
| **Kids**       | Read (all details)       | GET        | `/api/kids`                                            |                | Retrieves details of all kids in the database.   |
|                | Update (by ID)           | PATCH      | `/api/kids/:id`                                         | `{ "name": "Karl Marx", "age": 10, "favoriteGenre": "Adventure" }` | Updates details of a kid by their unique ID.     |


**Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?**
It was hard to implement validation on birthdates in author schema without using regex, which showed how important it is to have a proper input handling.

**What would you add to or change about your application if given more time?**
If I had more time, I would add features like user accounts with saved story progress and better search and filtering options.

