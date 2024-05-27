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

    

