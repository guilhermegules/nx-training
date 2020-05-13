# Todos Org

This project was generated using [Nx](https://nx.dev).

### This project was builded in get [started tutorial](https://nx.dev/angular/tutorial/01-create-application)

🔎 **This project is for understand fundamentals of nx**

### Commands:
- `npx create-nx-workspace@latest` create a new workspace;
- `nx serve <application_name>` execute application;
- `nx e2e <application_e2e> --watch` execute e2e test no browser;
- `nx e2e todos-e2e --headless` execute tests in headless mode;
- `nx g @nrwl/nest:app api --frontendProject=<app_name>` generate a nest application from a front end project;
- `nx g @nrwl/workspace:lib <lib_name>` create a lib from your workspace;
- `nx g @nrwl/angular:lib <lib_name>` create a lib from angular app;
- `nx g component <component_name> --project=<lib_or_project_name>` if you need to add a component to a lib, add a flag `--export` in command;
- `nx dep-graph` or `npm run dep-graph` to see application dependency graph;
- `nx build <application_name>` build a project;
- `nx run-many --target=build --projects=todos,api` building more then one application;
- `nx lint todo --with-deps` execute a lint on application and your dependencies.

### Application

Todo app using angular