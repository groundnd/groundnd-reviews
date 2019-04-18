# reviews_module
Displays reviews for any given abode and allows users to search within reviews

## Related Projects:
- https://github.com/abode-ly/carousel_module
- https://github.com/abode-ly/booking_module
- https://github.com/abode-ly/similar_homes_module
- https://github.com/abode-ly/host_info

## Installing dependencies
From within the root directory

```sh
npm install -g webpack
npm install
npm run execute
```

## CRUD API
1) Create
The component can create a review for a specific accommodation.

```
POST - /api/:accommodationid/reviews
```
2) Read 

The component can retrieve reviews from the database for a specific accommodation.

```
GET - /api/:accommodationid/reviews
```
3) Update

The component can update a review for a specific accommodation.
```
PATCH - /api/:accommodationid/reviews
```
4) Delete
The component can delete a review for a specific accommodation.

```
DELETE - /api/:accommodationid/reviews
```


