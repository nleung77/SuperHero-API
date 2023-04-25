# Superhero API

A RESTful API for retrieving information about superheroes & villains.

## Base URL
https://superhero-api.herokuapp.com/
https://github.com/nleung77/SuperHero-API

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
- `publisher`: Filter by publisher.

## Request Body

### Heroes

- `name`: Required. Name of the hero.
- `realName`: Required. Real name of the hero.
- `publisher`: Required. Name of the hero's publisher.
- `alignment`: Required. Alignment of the hero (good, bad, or neutral).
- `intelligence`: Required. Intelligence level of the hero (1-100).
- `strength`: Required. Strength level of the hero (1-100).
- `speed`: Required. Speed level of the hero (1-100).
- `durability`: Required. Durability level of the hero (1-100).
- `power`: Required. Power level of the hero (1-100).
- `combat`: Required. Combat level of the hero (1-100).
- `fullName`: Optional. Full name of the hero.
- `alterEgos`: Optional. Alter ego(s) of the hero.
- `aliases`: Optional. List of aliases for the hero.
- `placeOfBirth`: Optional. Place of birth for the hero.
- `firstAppearance`: Optional. First appearance of the hero.
- `occupation`: Optional. Occupation of the hero.
- `base`: Optional. Base of operations for the hero.
- `affiliation`: Optional. Affiliations of the hero.
- `relatives`: Optional. List of relatives for the hero.

### Villains

- `name`: Required. Name of the villain.
- `realName`: Required. Real name of the villain.
- `publisher`: Required. Name of the villain's publisher.
- `alignment`: Required. Alignment of the villain (good, bad, or neutral).
- `intelligence`: Required. Intelligence level of the villain (1-100).
- `strength`: Required. Strength level of the villain (1-100).
- `speed`: Required. Speed level of the villain (1-100).
- `durability`: Required. Durability level of the villain (1-100).
- `power`: Required. Power level of the villain (1-100).
- `combat`: Required. Combat level of the villain (1-100).
- `fullName`: Optional. Full name of the villain.
- `alterEgos`: Optional. Alter ego(s) of the villain.
- `aliases`: Optional. List of aliases for the villain.
- `placeOfBirth`: Optional. Place of birth for the villain.
- `firstAppearance`: Optional. First appearance of the villain.
- `occupation`: Optional. Occupation of the villain.
- `base`: Optional. Base of operations for the villain.
- `affiliation`: Optional.
- `relatives`: Optional. List of relatives for the villain.
