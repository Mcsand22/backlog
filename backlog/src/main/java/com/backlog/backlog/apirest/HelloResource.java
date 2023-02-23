package com.backlog.backlog.apirest;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;

@Path("/hello-world")
public class HelloResource {
    @GET
    @Produces("text/plain")
    public String hello() {
        return "Hello, World!";
    }
    @Path("/saludar") //api/hello-world/saludar
    @GET
    @Produces("text/plain")
    public String saludar() {
        return "saludando";
    }
}