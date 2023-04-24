# Superhero API

A RESTful API for retrieving information about superheroes & villains.

## Base URL

`https://localhost:3000`

## Endpoints

### Heroes

- `GET /api/heroes`: Get a list of all heroes.
- `GET /api/heroes/:id`: Get a hero by ID.
- `POST /api/heroes`: Create a new hero.
- `PUT /api/heroes/:id`: Update a hero by ID.
- `DELETE /api/heroes/:id`: Delete a hero by ID.

### Villains

- `GET /api/villains`: Get a list of all villains.
- `GET /api/villains/:id`: Get a villain by ID.
- `POST /api/villains`: Create a new villain.
- `PUT /api/villains/:id`: Update a villain by ID.
- `DELETE /api/villains/:id`: Delete a villain by ID.


## Query Parameters

- `name`: Filter by name.
- `year`: Filter by year.
- `publisher`: Filter by publisher.
- `issueNumber`: Filter by issue number.
- `director`: Filter by director.
- `rating`: Filter by rating.
- `archEnemy`: Filter by arch enemy.

## Request Body

- `name`: Required. Name of the hero, villain, comic, movie, or power.
- `year`: Required for movies. Year of release.
- `director`: Required for movies. Director of the movie.
- `poster`: Optional for movies. URL to a poster image.
- `rating`: Optional for movies. Rating out of 10.
- `storyline`: Optional for movies. Brief description of the movie plot.
- `characters`: Optional for movies and comics. List of character names.
- `publisher`: Required for comics. Name of the comic book publisher.
- `coverImage`: Optional for comics. URL to a cover image.
- `issueNumber`: Optional for comics. Issue number.
- `description`: Optional for powers and villains. Brief description of the power or villain.
- `realName`: Optional for villains. Real name of the villain.
- `powers`: Optional for villains. List of power names.
- `archEnemy`: Optional for villains. Name of the villain's arch enemy.
- `image`: Optional for villains. URL to an image of the villain.

