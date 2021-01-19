# FreecodecampSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Steps followed to create this project:

1. ng new freecodecamp-sample
2. ng serve
3. We simply imported **HttpClientModule** and included it in the imports array. That’s all - now we can use the  **HttpClient**  service in our Angular project to consume our REST API.
4. Angular apps are made up of components. In this step, we’ll learn how to create a couple of Angular components that compose our UI.
5. created home component: **ng g component home**
6. created about component: **ng g c about**
7. Next, open the  **src/app/about/about.component.html**  file and add the following code:

<p style="padding: 15px;"> This is the about page that describes your app</p>

8. Go to the  **src/app/app-routing.module.ts**  file and add the following routes:
    ```typescript
      const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
      ];

    ```
 - We imported the Angular components and we declared three routes.
- The first route is for redirecting the empty path to the home component, so we’ll be automatically redirected to the home page when we first visit the app.

9.In this tutorial step, we’ll learn to set up **Angular Material** in our project and build our application UI using Material components.

  - Go to your terminal and run this command from the root of your project:**$ ng add @angular/material** selected default options
  - Open the  **src/app/app.module.ts**  file and add the following imports:
    ```typescript
        import { MatButtonModule } from '@angular/material/button';
        import { MatToolbarModule } from '@angular/material/toolbar';
        import { MatIconModule } from '@angular/material/icon';
        import { MatCardModule } from '@angular/material/card';
        import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
    ```

- We imported the modules for these Material Design components:

   - **MatToolbar** that provides a container for headers, titles, or actions.

    - **MatCard** that provides a content container for text, photos, and actions in the context of a single subject.

    - **MatButton** that provides a native  <button>  or  <a>  element enhanced with Material Design styling and ink ripples.

    - **MatProgressSpinner** that provides a circular indicator of progress and activity.

   - Next, add these modules to the  imports  array:

     

  - ```typescript
           imports: [
                    BrowserModule,
                    AppRoutingModule,
                    HttpClientModule,
                    BrowserAnimationsModule,
                    MatToolbarModule,
                    MatIconModule,
                    MatCardModule,
                    MatButtonModule,
                    MatProgressSpinnerModule
                  ]
      ```
  - Next, open the  **src/app/app.component.html**  file and update it as follows:  
    ```html
          <mat-toolbar color="primary">  
            <h1>  My Angular Store  </h1>  
            <button mat-button routerLink="/">Home</button>  
            <button mat-button routerLink="/about">About</button></mat-toolbar><router-outlet></router-outlet>
    ```

    - We added a top navigation bar with two buttons that take us to the home and about pages, respectively.

10.  **Mocking a REST API**
    Go to a new command-line interface and start by installing  `json-server`  from `npm` in your project:    
  ```bash
      $ cd ~/freecodecamp-sample
      $ npm install --save json-server 
  ```

 - Next, create a  `server` folder in the root folder of your Angular project:

   ```bash
   $ mkdir server
   $ cd server
   ```

 - In the  `server` folder, create a  `database.json` file and add the following JSON object:

   ```json
   {
       "products": []
   }
   ```

   

 - This JSON file will act as a database for your REST API server. You can simply add some data to be served by your REST API or use [Faker.js](https://github.com/marak/Faker.js/) for automatically generating massive amounts of realistic fake data.

 - Go back to your command-line, navigate back from the  `server` folder, and install `Faker.js` from npm using the following command: goto project 

   ```bash
   $ cd ~/freecodecamp-sample
   $ npm install faker --save
   ```

   

 - At the time of creating this example, **faker v4.1.0** will be installed.

   Now, create a  `generate.js` file and add the following code:

   ​	

   ```js
   var faker = require('faker');
   
   var database = { products: []};
   
   for (var i = 1; i<= 300; i++) {
     database.products.push({
       id: i,
       name: faker.commerce.productName(),
       description: faker.lorem.sentences(),
       price: faker.commerce.price(),
       imageUrl: "https://source.unsplash.com/1600x900/?product",
       quantity: faker.random.number()
     });
   }
   
   console.log(JSON.stringify(database));
   ```

   

- We first imported faker, and next we defined an object with one empty array for products. Next, we entered a *for* loop to create *300* fake entries using faker methods like  `faker.commerce.productName()` for generating product names. [Check all the available methods](https://github.com/marak/Faker.js/#api-methods). Finally we converted the database object to a string and logged it to standard output.

- Next, add the  `generate` and  `server` scripts to the  `package.json` file:

  ```json
    "scripts": {
      "ng": "ng",
      "start": "ng serve",
      "build": "ng build",
      "test": "ng test",
      "lint": "ng lint",
      "e2e": "ng e2e",
      "generate": "node ./server/generate.js > ./server/database.json",
      "server": "json-server --watch ./server/database.json"
    },
  ```

  

- Next, head back to your command-line interface and run the generate script using the following command:

  ```bash
  $ npm run generate
  ```

  Finally, run the REST API server by executing the following command:

  ```bash
  $ npm run server
  ```

  

- You can now send HTTP requests to the server just like any typical REST API server. Your server will be available from the  `http://localhost:3000/` address.

  These are the API endpoints we'll be able to use via our JSON REST API server:

  - `GET /products` for getting the products
  - `GET /products/<id>` for getting a single product by id
  - `POST /products` for creating a new product
  - `PUT /products/<id>` for updating a product by id
  - `PATCH /products/<id>` for partially updating a product by id
  - `DELETE /products/<id>` for deleting a product by id

  You can use  `_page` and  `_limit` parameters to get paginated data. In the  `Link` header you'll get  `first`,  `prev`,  `next` and  `last` links.

  Leave the JSON REST API server running and open a new command-line interface for typing the commands of the next steps.

  

# Step 8 — Creating a Service for Consuming the REST API with Angular HttpClient

- In this step, we’ll learn how to consume our REST API from Angular using **HttpClient**.

- We’ll need to create an Angular service for encapsulating the code that allows us to consume data from our REST API server.

  Go to your terminal and run the following command:

```bash
$ ng g service api
```

Next, go to the  `src/app/api.service.ts` file, import and inject  `HttpClient`:

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }
}
```

- We imported and injected the  `HttpClient` service and defined the  `SERVER_URL` variable that contains the address of our REST API server.

- Next, define a  `get()` method that sends a GET request to the REST API endpoint:

```typescript
public get(){  
		return this.httpClient.get(this.SERVER_URL);  
	} 
```

- The method simply invokes the  `get()` method of  `HttpClient` to send GET requests to the REST API server.

- Next, we now need to use this service in our home component. Open the `src/app/home/home.component.ts` file, and import and inject the data service as follows:

  ```ts
  import { Component, OnInit } from '@angular/core';  
  import { ApiService } from '../api.service';
  
  @Component({  
  	selector: 'app-home',  
  	templateUrl: './home.component.html',  
  	styleUrls: ['./home.component.css']  
  })  
  export class HomeComponent implements OnInit {
  	products = [];
  	constructor(private apiService: ApiService) { }
  	ngOnInit() {
  		this.apiService.get().subscribe((data: any[])=>{  
  			console.log(data);  
  			this.products = data;  
  		})  
  	}
  }
  ```

- We imported and injected  `ApiService.` Next, we defined a  `products` variable and called the  `get()` method of the service for fetching data from the JSON REST API server.

- Next, open the  `src/app/home/home.component.html` file and update it as follows:

  ```html
  <div style="padding: 13px;">
      <mat-spinner *ngIf="products.length === 0"></mat-spinner>
  
      <mat-card *ngFor="let product of products" style="margin-top:10px;">
          <mat-card-header>
              <mat-card-title>{{product.name}}</mat-card-title>
              <mat-card-subtitle>{{product.price}} $/ {{product.quantity}}
              </mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
              <p>
                  {{product.description}}
              </p>
              <img style="height:100%; width: 100%;" src="{{ product.imageUrl }}" />
          </mat-card-content>
          <mat-card-actions>
        <button mat-button> Buy product</button>
      </mat-card-actions>
      </mat-card>
  </div>
  ```



- We used the  `<mat-spinner>` component for showing a loading spinner when the length of the  `products` array equals zero, that is before any data is received from the REST API server.

- Next, we iterated over the  `products` array and used a Material card to display the `name`,  `price`,  `quantity`,  `description` and  `image` of each product.

- This is a screenshot of the home page after JSON data is fetched:

  ![img](https://miro.medium.com/max/301/0*R7qs5jGg_IlOtTWF)

  Next, we’ll see how to add error handling to our service.

  # Step 9 — Adding Error Handling

- In this step, we’ll learn to add error handling in our example.

  Go to the  `src/app/api.service.ts` file and update it as follows:

  ```typescript
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpErrorResponse } from "@angular/common/http";
  
  import {  throwError } from 'rxjs';
  import { retry, catchError } from 'rxjs/operators';
  
  
  @Injectable({
    providedIn: 'root'
  })
  export class ApiService {
  
    private SERVER_URL = "http://localhost:3000/products";
  
    constructor(private httpClient: HttpClient) { }
  
    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
  
    public sendGetRequest(){
      return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
    }
  }
  ```

- This is a screenshot of an example error on the browser console:

  ![img](https://miro.medium.com/max/442/0*gZUHzXPjrRSSK4ZF)

  In the next step, we’ll see how to add pagination to our application

- For Pagination and firebase deployment follow: https://www.freecodecamp.org/news/angular-8-tutorial-in-easy-steps/

- 



