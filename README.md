# React Base Project

This a sample react project we regularly use at Manush Technologies.

## Usage

    Starting the project

```bash
    yarn start:dev # start project in dev mode
    yarn start:stage # start project in stage mode
```

    Build the project

```bash
    yarn build:prod # build project in production mode
    yarn build:stage # build project in stage mode
```

## Folder Structure

    1. pages --> contains all page component
    2. components --> contains all components
    3. styles --> contains all styles/css
    4. contants --> contains all const values
    5. layout --> contains app layout for pages
    6. routes --> contains app routes
    7. services --> contains axios and api call configs
    8. utils --> contains all utility functions which may be reused

    .env.* contains all env variable for different mode

## Notes

    1. Eslint and prettier is installed to make sure code quality is maintained.

    2. if you are on windows machine and linter gives error
    change -->
        'prettier/prettier': 'error',
        'linebreak-style': ['error', 'unix'],
    to --->
        'prettier/prettier': 0,
        'linebreak-style': 0,

    3. if you encounter error when comitting to github --> most probable reason is
       that your code does not meet our standards. Please fix the linting errors in that case.
