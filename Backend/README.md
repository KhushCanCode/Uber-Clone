# Backend API Documentation

## API Endpoints

## User

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
- `Authorization:` Bearer jwt_token

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
- `Authorization:` Bearer jwt_token

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

## Captain

### POST /captain/register
Register a new captain.

#### Request

- **Body**:
  ```json
  {
      
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

#### Response

- **Success** (201 Created):
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
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
      },
      {
        "msg": "Color must be at least 3 characters",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid Type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

#### Validation

- `email:` Must be a valid email address.
- `fullname.firstname:` Must be at least 3 characters long.
- `password:` Must be at least 6 characters long.
- `vehicle.color:` Must be at least 3 characters long.
- `vehicle.plate:` Must be at least 3 characters long.
- `vehicle.capacity:` Must be at least 1.
- `vehicle.vehicleType:` Must be one of car, motorcycle, or auto.



### POST /captain/login
Authenticates a captain and returns a JWT token.

**Request Body:**
```json
{
  "email": "captain@example.com",
  "password": "password123"
}
```

**Responses:**

- **Success** (201 Created)
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "captain@example.com",
      
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


### GET /captain/profile
Fetches the profile of the authenticated captain.

**Request:**
Headers:
- `Authorization:` Bearer jwt_token

**Responses:**

- **Success** (200 Ok)
  ```json
  {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    // ...other captain fields...
  }
  ```

- **Unauthorized** (401)
  ```json
  {
      "message": "Authentication required"
  }
  ```

### GET /captain/logout
Logs out the authenticated captain by invalidating the JWT token.

**Request:**
Headers:
- `Authorization:` Bearer jwt_token

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

