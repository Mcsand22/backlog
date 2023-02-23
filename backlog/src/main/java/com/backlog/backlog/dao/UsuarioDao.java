package com.backlog.backlog.dao;

import com.backlog.backlog.domain.Usuario;

import java.util.Collection;

public interface UsuarioDao {
    public Collection<Usuario> obtenerTodos();
    
}
