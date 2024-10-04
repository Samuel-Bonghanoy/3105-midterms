# CS-3105 Midterm Output 

A basic API with user authentication created for my CS-3105 college course, using Typescript and Express

## Usage

### Using NPM
```bash
git clone https://github.com/Samuel-Bonghanoy/3105-midterms.git

cd 3105-midterms

npm install

npm run dev
```

### Using Docker Compose
```bash
git clone https://github.com/Samuel-Bonghanoy/3105-midterms.git

cd 3105-midterms

docker compose up
```

## Env Variables

Both the JWT_SECRET and PORT env variabled can be configured in the `config/env.ts` file.

```ts
// config/env.ts
export const env = {
  JWT_SECRET:
    process.env.JWT_SECRET || 'ivebeencodingfor6hoursstraightiwannakms',
  PORT: process.env.PORT || 4200,
};
```
Note: Docker Port configurations will also need to be changed along with the PORT variable.

## Testing

```bash
# POST /register
curl -X POST http://localhost:4200/register \
-H "Content-Type: application/json" \
-d '{"username": "Test", "email": "test@gmail.com", "password": "test12345"}'

# POST /login
curl -X POST http://localhost:4200/login \
-H "Content-Type: application/json" \
-d '{"username": "Test", "password": "test12345"}'

# GET /profile
curl -X GET http://localhost:4200/profile \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJUZXN0IiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTcyODA2ODEzNn0.1RUnfa5aAR39AS1RDJ55vqW_dDZa_kxaUMGEkcQa4aM"
```
