# EaaS
Error as a Service

## about
have you ever needed to display an error in your application, but had no idea what to say in it?

Look no further! EaaS is here!

EaaS (Error as a Service) provides a modern, RESTful, scalable solution to the common problem of needing an error message to display to a user.

Returned error messages are taken from some of the tech industry's best error-producing companies (ie, Microsoft)! 

## usage
either run it on your own server with `node server.js`, or be a cheapo and use the one I'm hosting on [Red Hat OpenShift](https://www.openshift.com/) at the url [http://eaas-ohnx.rhcloud.com/](http://eaas-ohnx.rhcloud.com/)

## API
### getting an error
make a GET request to anything to get an error message back.

## roadmap
 - [ ] use [mongoDB](https://www.youtube.com/watch?v=dQw4w9WgXcQ) somehow to make this /really/ web-scale

## contributing
Please donate your error messages! Fork the repo, add to the end of `errors.json` and make a pull request.
