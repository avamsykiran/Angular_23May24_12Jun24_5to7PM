Angular 
-------------------------------------------------------------------------------------------

    is a javascript based Single-Page-Application framework.

    Static Website

        it is a folder of pre-scripted .html and .css documents
        hosted on a http-server.

    Dynamic Web Application

        'dynamic' here refers to that the html content is not pre-scripted but rather is
        generated on the fly.

        HttpServer                                               Client/Browser

            Server Side Programs
            (servlets/jsp/asp/aspx/php..etc.,)

                    <----------REQ1-------------------------
            is received by a program,
            and after processing the
            data in the request,
            some dynamic html contnet is 
            generated
                ------------(html-content)RESP -------------------->

                    <----------REQ2-------------------------
            is received by a program,
            and after processing the
            data in the request,
            some dynamic html contnet is 
            generated
                ------------(html-content)RESP -------------------->


    Single Page Application

        HttpServer                                               Client/Browser

            spa-bundle
            (index.html + *.js)
                    <-----------REQ----------------------------
                    ----(spa-bundle) RESP----------------------->   index.html is loaded along with the .js

                                                                    the JS will execute on the client machine and
                                                                    any events including links / form-submitions
                                                                    ...etc., are all handled by the JS on the client.

                                                                    the JS can generate html content dynamically as needed
                                                                    and can replace the content of the index.html 
                                                                    as needed.

            rest-api    <------.json/.xml---------------------->    spa-bundle

    SPA-Frameworks

        AngularJS
        Angular
        ReactJS
        VueJS
        ...etc.,

    AngularJS vs Angular

        AngularJS uses JavScript for scripting
        Angular supports TypeScript (Angular 2 to Angular 18)


    TypeScript ?

        is a super set of JavaScript. JavaScript plus type-safty is TypeScript. TypeScript is
        not understood by any browser but scripting using typescript will reduce the chance of
        typing errors and eliminates a lot of runtime debugging.

        .ts must be compiled in .js before it is executed on the browser. And this process is called
        transpelling (compiling).

    Lab SetUp

        NodeJS      above 18.x              node --version      https://nodejs.org
        Angular CLI                         ng version          npm i -g @angular/cli
        VSCode as a IDE


    NodeJS ?

        is a javascript runtime. alternative to a browser to execute javascript. NodeJS
        does not support any UI like html.

        Now, while developing an applciation we have to execute various tools like
            angular-cli     for project-artifact-management
            tsc             for compilation
            jasmine         for testing
            grunt/gulp      for packaging and son on...,

        And these tools are executed on the developer machine not on the client.
        And for this purpose we need nodejs.

    Angular CLI

        is a frontier of commands or macros that help
        in creating and managing the strucutre of an angular application. 
        And also command for testing, packaging, and executing angular apps are found.

        ng new app-name             creates a new angular app 

        cd app-name

            ng serve                    compile, build, and host the package into a development server running on 4200 port
            ng serve --port 9899 -o     compile, build, and host the package into a development server running on 9899 port, 
                                        and will launch the browser pointing to http://localhost:9899


            ng build                    compile, build, and stores the package into 'dist' folder
            ng test                     compile, build, and runs the test cases

            ng g artifact-type artifact-name    is used to generate angular artifacts.

    Angular Archetecture

        talks about the list of artifacts an angular application is made up of.

        1. Each angular artifact is a typescript class.
        2. Each class is marked with a decorator to identifiy its role.
        3. Each of these decorators are passed a json-object called meta-data which has of the configuration.
        
        Modules
            @NgModule({
                declarations:[],
                imports:[],
                exports:[],
                providers:[],
                bootstrap:[]
            })
            class SalesModule {

            }

        Directives
            @Directive({
                selector:'[appFastMovingStock]'
                providers:[]
            })
            class FastMovingStockDirective {

            }

        Components
            @Component({
                selector:'app-dashboard',
                templateUrl:'app-dashboard.component.html',
                styleUrls:['app-dashboard.component.css'],
                providers:[]
            })
            class SalesDashboardComponent {

            }

        Pipes
            @Pipe({
                name:'inwords'
            })
            class IntoWordsPipe {

            }

        Services
            @Injectable({
                providedIn:'root'
            })
            class StockService {

            }

    Angular Modules

        Module is a isolated logical unit of an application.

        Angular Modules and Javascript/Typescript modules live alongside one another in an angular app.

        Angular Modules is a class by itself.

            @NgModule({
                declarations:[ /*list of all components, directive and pipes that belong to this module */ ],
                imports:[ /* list of other moduels we want to import from */ ],
                exports:[ /* list of components or pipes or directive thar belong here but are allowed to be used elsewhere */ ],
                providers:[ /* list of services that belong to this module */ ],
                bootstrap:[ /* list of Components that must be loaded along witht he Module */ ]
            })
            class SalesModule {

            }
        
        Each angular application is hosued inside a top-level-module called 'ROOT MODULE'. The 'ROOT MODULE'
        is generally named as 'AppModule'.

        'ROOT MODULE' will not have 'exports' section in its meta-data.

        Only 'ROOT MODUELE' has 'bootstrap' section in its meta-data.

        ng g module ModuleName        is the command used for creating a module

    Angular Feature - Html Extendability

        This allows us to create our own html elements and html attributes using angular framework.
        
        These html-attributes created using angular framework are called Directives.
        These html-elements created using angular framework are called Components.

        index.html

        <html>......</html>
                |- <head>.....</head>
                |- <body>.....</body>
                         |- <app-root>....</app-root>
                                        |- <app-header>...</app-header>
                                        |- <app-emps-list>...</app-emps-list>
                                        |- <app-vendors-list>...</app-vendors-list>
                                        |- <app-orders-list>...</app-orders-list>


    Angular Components

        Component is an html-element created using Angular Framework.

        ng g c SalesDashboard --skip-tests

            SalesDashboard.component.ts      Component Class         Fields and Methods
            SalesDashboard.component.html    Component Template      HTML MarkUp
            SalesDashboard.component.css     Component Style         style

            SalesDashboard.component.ts
                @Component({
                    selector:'app-sales-dashboard',
                    templateUrl:'SalesDashboard.component.html',
                    styleUrls:['SalesDashboard.component.css'],
                    providers:[]
                })
                class SalesDashboardComponent {

                }

    Data Binding

        is the way to consuem the fields and methods of a component class in its template.

        we bind the fields with DOM in the html and the methods with the events in the html.

        Interpolation
            to render the value of an expression in the content of an element.

            <element> {{expression}} </element>

            <p> Sum of {{n1}} and {{n2}} is {{n1+n2}} </p>

        Two-Way Data Binding
            to bind a field with a form-element. The value of the field is loaded into the form-element for the first time.
            When ever the form-eleemnt is edited, the value of the field is as well updated.

            <input [(ngModel)]="fieldName" />

            'ngModel' is a directive defined in 'FormsModule' from '@angular/forms'.

        One-Way Data Binding
            Attribute Binding
                is about binding the value of a field to an attribute

                <element [attribute]="field"></element>

                <img [src]="myLogo" />

                <img src="../imgs/logo.png" />

            Event Binding
                is to bind a method with an event-directive.

                <element (eventDirective)="method()"> </element>

                html-event-attribute        eventDirective
                    onClick                     click
                    onDblClick                  dblClick
                    onChange                    change
                    onFocsu                     focus
                    onBlur                      blur
                    onSubmit                    ngSubmit
                    
            Style Binding

                is about binding an expression to a cssProperty or a cssClass.

                [style.cssProperty]="expression"

                let abcd:string = "CENTER";
                <p [style.textAlign]="abcd"> Some Text </p>

                [ngStyle]="jsonObjectHavingCssPropertyNaemsAsKeysAndValuesAsValues"

                let obj1 = {width:"20px",height:"100px",margin:"10px"};
                <p [ngStyle]="obj1"> Some Text </p>

                [class.className]="booleanExpression"

                let flag:boolean = true;
                <p [class.highlight]="flag"> Some Text </p>

                [ngClass]="arrayOfClassNames"

                let myClasses:string[] = ["hightlight","important","bordered"];
                <p [ngClass]="myClasses"> Some Text </p>

                [ngClass]="jsonObjectHavignClassNamesAsKeusAndBooleanAsValues"    

                let myClasses = {"hightlight":true,"important":false,"bordered":true};
                <p [ngClass]="myClasses"> Some Text </p>

    Structural Directives

        ngIf

            <ng-template [ngIf]="booleanExpression">
                <p> This para will appear only if teh boolean expression evalautes to true. </p>
            </ng-template>

            <p *ngIf="booleanExpression"> This para will appear only if teh boolean expression evalautes to true. </p>

            <ng-container *ngIf="booleanExpression then template1; else template2">
            </ng-container>

            <ng-template #template1>
                <p>Template one content</p>
            </ng-template>            
            
            <ng-template #template2>
                <p>Template two content</p>
            </ng-template>

        ngFor

            <ng-template [ngFor]="let loopingVar of array">
                <p> {{loopingVar}} </p>
            </ng-template>

            <p *ngFor="let loopingVar of array">
                {{loopingVar}}
            </p>

        ngSwitch

            <div [ngSwitch]="anExpression">
                <p *ngSwtichCase="value1"> if expression evaluates to value1 </p>
                <p *ngSwtichCase="value2"> if expression evaluates to value2 </p>
                <p *ngSwtichCase="value3"> if expression evaluates to value3 </p>
                <p *ngSwtichCase="value4"> if expression evaluates to value4 </p>
                <p *ngSwtichDefault> if expression evaluates to none of those values </p>
            </div>

    Pipes

        is a construct used to alter a value into another before rendering

        built-in pipes

            lowercase
            uppercase
            titlecase
            number
            percent
            date
            currency
            async
            json

        {{expression|pipeName:'pipe-inputs'}}
