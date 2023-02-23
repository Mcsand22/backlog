package com.backlog.backlog.apirest;

import com.backlog.backlog.dao.Impl.UsuarioDaoImpl;
import com.backlog.backlog.domain.Usuario;
import com.backlog.backlog.service.UsuarioImpl;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.sql.SQLException;
import java.util.Collection;

@Path("/usuarios")
public class UsuarioRecurso {

    @GET
    @Produces("application/json")
    public Response getUsuario() throws SQLException {
        Collection<Usuario> lista = new UsuarioImpl().obtenerTodosLosUsuarios();
        return Response.ok().status(Response.Status.OK).entity(lista).build();
    }

    @POST
    @Produces("application/json")
    @Consumes("application/json")

    public Response setUsuario(Usuario usuario) throws SQLException {
        UsuarioDaoImpl.guardarUsuario(usuario);

        return Response.ok().status(Response.Status.OK).entity(usuario).build();
    }

}


