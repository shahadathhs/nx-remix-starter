# nx-remix-starter

# Basic Nx Workspace Commands Guide

## **Creating a New Workspace**

Run the following command to create a new Nx workspace:

```bash
npx create-nx-workspace@latest
```

---

## **Folder Structure**

### **Apps Folder**

The `apps` folder contains all the applications.

### **Creating a New Remix Application**

Run the following command:

```bash
npx nx g @nx/remix:app apps/app-name
```

---

### **Libs Folder**

The `libs` folder contains all the libraries shared across applications.

### **Creating a New Remix Library**

Run the following command:

```bash
npx nx g @nx/remix:lib libs/lib-name
```

### **Creating a New TypeScript Library (For mongoDB models, interface etc)**

Run the following command:

```bash
npx nx g @nx/js:lib libs/lib-name
```

---

## **Adding Tailwind to an Application**

To add Tailwind CSS to an existing application:

```bash
npx nx generate setup-tailwind ...
```

---

<aside>
💡

Tailwind CSS cannot be directly added to a library. However, styles from the application will automatically apply on library when the library is imported into an application.

</aside>

## **Development Commands**

### **Running the Application in Development Mode**

Use one of the following commands:

```bash
npx nx run app-name:dev
```

OR

```bash
npx nx dev app-name
```

### Running all apps parallely:

<aside>
💡

```jsx
npx nx run-many -t dev --parallel --all
```

</aside>

### **Building the Application**

Run the following command:

```bash
npx nx run app-name:build
```

OR

```bash
npx nx build app-name
```

---

### Building all libs & apps

<aside>
💡

```json
npx nx run-many --all --target=build
```

</aside>

## **Linting**

### **Checking for Linting Errors**

Run the following command:

```bash
npx nx run app-name:lint
```

OR

```bash
npx nx lint app-name
```

---

### Checking **Linting Errors** for all libs & apps

<aside>
💡

```json
npx nx run-many --all --target=lint
```

</aside>

## **Routes**

### **Adding a Route to an Existing Application**

Run the following command (no file extension in the command):

```bash
npx nx g @nx/remix:route path-to-the-route/route-name
```

### **Adding a Loader to an Existing Route**

Run the following command:

```bash
npx nx g @nx/remix:loader path-to-the-route/route-name.extension
```

### **Adding an Action to an Existing Route**

Run the following command:

```bash
npx nx g @nx/remix:action path-to-the-route/route-name.extension
```

---

### **Understanding `path-to-the-route`**

The `path-to-the-route` refers to the **exact file path** from your current working directory to the location where the new route should be created or modified. This path must be relative to your project structure and should point directly to the folder or file where the route resides or is to be added.

For example:

```bash
npx nx g @nx/remix:route apps/app-name/app/routes/route-name
```

In this case:

- `apps/app-name/app/routes/` is the directory where your application's route files are located.
- `route-name` is the name of the new route being created.

This approach ensures that the new route is added to the appropriate location within your project. Always verify the folder structure to avoid misplacing routes.