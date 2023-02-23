package com.backlog.backlog.service;

import com.backlog.backlog.dao.Impl.UsuarioDaoImpl;
import com.backlog.backlog.domain.Usuario;
import jakarta.inject.Named;

import java.util.Collection;

@Named
public class UsuarioImpl implements UsuarioTodos{

    @Override
    public Collection<Usuario> obtenerTodosLosUsuarios() {
        Collection<Usuario> usuarios = new UsuarioDaoImpl().obtenerTodos();
        return usuarios;
    }

}
