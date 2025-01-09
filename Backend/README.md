# Backend API Documentation

## API Endpoints

### POST /users/register
Register a new user.

#### Request

- **Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

#### Response

- **Success** (201 Created):
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

- **Error** (400 Bad Request):
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First Name must be 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Validation

- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.



### POST /users/login
Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Responses:**

- **Success** (201 Created)
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com",
      
    }
  }
  ```

- **Bad Request** (400)
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

- **Unauthorized**
  ```json
  {
    "message": "Invalid Email or Password"
  }
  ```

**Validation Errors:**
- `email` must be a valid email address.
- `password` must be at least 6 characters long.



### GET /users/profile
Fetches the profile of the authenticated user.

**Request:**
Headers:
- Authorization: Bearer jwt_token

**Responses:**

- **Success** (200 Ok)
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com",
    // ...other user fields...
  }
  ```

- **Unauthorized** (401)
  ```json
  {
      "message": "Authentication required"
  }
  ```

### GET /users/logout
Logs out the authenticated user by invalidating the JWT token.

**Request:**
Headers:
- Authorization: Bearer jwt_token

**Responses:**

- **Success** (200 Ok)
  ```json
  {
   "message": "Logged Out"
  }
  ```

- **Unauthorized** (401)
  ```json
  {
      "message": "Authentication required"
  }
  ```
