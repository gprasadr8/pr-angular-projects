# ServicesDemo

1. created project using angular-cli  `ng new services-demo`
2. created header component using `ng g c components/header`



### How to add bootstrap-4 to angular project?

1. `npm install bootstrap`

2. `npm install jquery`

3. Add bootstrap configuration into `angular.json` file under `architect\build\options` like below

   ​	

   ```json
   "styles": [
   
   	"src/styles.css",
   
   	"./node_modules/bootstrap/dist/css/bootstrap.min.css"
   
   ],
   
   "scripts": [
       //jquery should be added first otherwise it throws error
   	"./node_modules/jquery/dist/jquery.min.js",
   	"./node_modules/bootstrap/dist/js/bootstrap.min.js"	
   
   ]
   ```

   

4. create header components `ng g c components/header`

5. add bootstrap4 nav bar with Home, About, Users menu

6. create components for home `ng g c components/home` , about `ng g c components/about`, users `ng g c components/users`

7. create  routing module`ng g m modules/app-routing`

8. add routes to routing module 

   ```typescript
   const appRoutes:Routes = [
     {path:"home", component:HomeComponent},
     {path:"about", component:AboutComponent},
     {path:"users", component:UsersComponent},
     {path:"",redirectTo:"home", pathMatch:"full"}
   ];
   
   @NgModule({
     declarations: [],
     imports: [ RouterModule.forRoot(appRoutes) ],
     exports:[RouterModule]
   })
   export class AppRoutingModule { }
   ```

   

9. import routing module into `app.module.ts` file into imports arrays

10. Instead of using `href` attribute use `routerLink` to refresh the part of the page instead of reloading the complete page.

    ```html
     <a class="nav-link" href="about">About</a>
     <a class="nav-link" routerLink="users">Users</a>
    ```

11. create users service `ng g s services/users`

12. get sample fake data from `https://jsonplaceholder.typicode.com/users`

13. create users array with sample data and create getUsers() and getUserById() methods

14. inject the user-service using constructor injection

15. display all the users in users component

16. 

