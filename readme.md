# GraphiQL-App: REST/GraphQL Client

## Overview

This repository hosts the development of a lightweight application combining features of Postman and GraphiQL. The application allows users to interact with RESTful APIs and GraphQL endpoints, offering method selection, URL input, headers editing, and response viewing.

## Purpose

The goal is to create a tool that supports both REST and GraphQL requests, integrating authentication, history tracking, and a user-friendly interface. The app is built using React 18+ with NextJS or Remix, ensuring a modern, efficient, and accessible development environment.

## Key Features

- RESTful API client with method selection and headers editor.
- GraphiQL client with query editor and documentation explorer.
- User authentication via Firebase.
- Request history with easy retrieval and re-execution.
- Internationalization support with at least two languages.

## Repository Structure

- **main branch**: Contains only the README.md.
- **develop branch**: Active development branch.

## Technical Requirements

- React 18+, Remix with Vite, Typescript, Eslint, Prettier.

## Layout 

```
+----------------------------------------------------+
|                      Header                        |
|  +---------------------------------------------+   |
|  | [Logo] | Language Toggle | [Sign In]        |   |
|  +---------------------------------------------+   |
+----------------------------------------------------+
|                                                    |
|   +--------------------------------------------+   |
|   |                                            |   |
|   |                Welcome!                    |   |
|   |                                            |   |
|   | [Sign In] [Sign Up]                        |   |
|   |                                            |   |
|   +--------------------------------------------+   |
|                                                    |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+
```