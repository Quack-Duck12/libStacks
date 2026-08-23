# Data Folder

This folder contains all user-related data, such as book objects and their cover/spine images.

## Structure

```
data/
├── book_template.json
├── cover/
│   ├── front/
│   └── spine/
├── README.md
└── temp.env.json #temp W.I.P placeholder (untracked via git)
```

## Book Object Model

Each book is represented as a JSON object of the following shape (see [`book_template.json`](./book_template.json)):

```json
{
  "title": "",
  "authors": [""],
  "genre": [""],
  "series": {
    "name": "",
    "seriesID": 0,
    "number": [0]
  },
  "identification": {
    "ID": "0",
    "isbn": "",
    "isbn13": "",
    "goodreadsID": ""
  },
  "publication": {
    "binding": "",
    "pages": 0,
    "publisher": "",
    "yearPublished": 0,
    "originalPublicationYear": 0
  },
  "dimensions": {
    "height_mm": 0,
    "width_mm": 0,
    "depth_mm": 0
  },
  "images": {
    "spine": "",
    "cover": "",
    "foreEdge": ""
  },
  "color": {
    "foreEdge": "",
    "front": "",
    "spine": ""
  },
  "user": {
    "pagesRead": 0,
    "dateRead": "",
    "rating": 0,
    "review": "",
    "notes": ""
  }
}
```

### Field Reference

| Field                                 | Type       | Description                                                                                         |
| -------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| `title`                                | `string`   | Book title.                                                                                           |
| `authors`                              | `string[]` | One or more author names.                                                                             |
| `genre`                                | `string[]` | One or more genres associated with the book.                                                          |
| `series.name`                          | `string`   | Name of the series this book belongs to, if any.                                                      |
| `series.seriesID`                      | `number`   | Internal ID linking this book to a series record.                                                     |
| `series.number`                        | `number[]` | Position(s) within the series (e.g. `[1]`). Collections/Omnibus editions covering multiple entries via a range, e.g. `[1, 2, 3, 4]`. |
| `identification.ID`                    | `string`   | Internal-use-only record ID. Not sourced from external data.                                          |
| `identification.isbn`                  | `string`   | 10-digit ISBN.                                                                                         |
| `identification.isbn13`                | `string`   | 13-digit ISBN.                                                                                         |
| `identification.goodreadsID`           | `string`   | Goodreads Book ID.                                                                                     |
| `publication.publisher`                | `string`   | Publisher name.                                                                                        |
| `publication.binding`                  | `string`   | Format (e.g. Paperback, Hardcover, Leather-bound).                                                     |
| `publication.pages`                    | `number`   | Page count.                                                                                             |
| `publication.yearPublished`            | `number`   | Year this edition was published.                                                                       |
| `publication.originalPublicationYear`  | `number`   | Year the work was originally published.                                                                |
| `dimensions.height_mm`                 | `number`   | Physical height of the book, in millimetres.                                                           |
| `dimensions.width_mm`                  | `number`   | Physical width of the book, in millimetres.                                                            |
| `dimensions.depth_mm`                  | `number`   | Physical depth of the book (spine to fore-edge), in millimetres.                                       |
| `images.cover`                         | `string`   | Relative path/filename to the front cover image in `cover/front/`.                                     |
| `images.spine`                         | `string`   | Relative path/filename to the spine image in `cover/spine/`.                                           |
| `images.foreEdge`                      | `string`   | (Optional) Relative path/filename to a fore-edge image.                                                |
| `color.front`                          | `string`   | Dominant/representative color of the front cover.                                                      |
| `color.spine`                          | `string`   | Dominant/representative color of the spine.                                                            |
| `color.foreEdge`                       | `string`   | (Optional) Dominant/representative color of the fore-edge (the page-edge side, opposite the spine).    |
| `user.pagesRead`                       | `number`   | Number of pages the user has read so far.                                                              |
| `user.dateRead`                        | `string`   | Date the user finished reading the book.                                                                |
| `user.rating`                          | `number`   | User's personal rating (0 - 5).                                                                                 |
| `user.review`                          | `string`   | User's personal review text.                                                                            |
| `user.notes`                           | `string`   | User's personal notes on the book.                                                         |

## Cover Images

Cover images are stored under `cover/`, split by type:

```
data/cover/front/   # front cover images
data/cover/spine/   # spine images
```

- Front cover images belong in `cover/front/`, referenced by a book's `images.cover` field.
- Spine images belong in `cover/spine/`, referenced by a book's `images.spine` field.
- Option of future implementation of `cover/frontEdge/` open based on if requried/needed  

## Storage

Book data currently lives in `temp.env.json` - a flat JSON array of book objects, matching the shape in `book_template.json` - loaded directly by the Express API layer. This is a temporary, work-in-progress storage solution.

## Future Plans

Storage will be migrated from the flat JSON file to **SQLite**, to support:

- Proper querying/filtering (by author, publisher, year, etc.)
- Relational structure (e.g. separating `authors` into their own table for many-to-many relationships)
- Database constraints for stronger data integrity
- More efficient querying at scale
- Better performance and scalability as the library grows