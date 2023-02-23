package com.backlog.backlog.dao.Impl;

import com.backlog.backlog.dao.ConexionDB;
import com.backlog.backlog.dao.UsuarioDao;
import com.backlog.backlog.domain.Usuario;

import java.sql.*;
import java.util.ArrayList;
import java.util.Collection;

public class UsuarioDaoImpl implements UsuarioDao {

    @Override
    public Collection<Usuario> obtenerTodos() {
        Collection<Usuario> usuarios = new ArrayList();

        ConexionDB ConexionDB = null;
        Connection connection = ConexionDB.obtenerConexion();

        String query = "SELECT * FROM usuarios";

        try {
            PreparedStatement stmt = connection.prepareStatement(query);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()) {
                Usuario usuario = usuarioDelResultSet(rs);
                usuarios.add(usuario);
            }
            stmt.close();

            return usuarios;

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }

    private Usuario usuarioDelResultSet(ResultSet rs) throws SQLException {
        Usuario usuario = null;
        Integer idUsuario = rs.getInt(1);
        String nombreUsuario = rs.getString(2);
        String apellidoUsuario = rs.getString(3);
        String mailUsuario = rs.getString(4);
        String contraseniaUsuario = rs.getString(5);
        Blob imgUsuario = rs.getBlob(6);

        usuario = new Usuario(idUsuario, nombreUsuario, apellidoUsuario, mailUsuario,
                contraseniaUsuario, imgUsuario);

        return usuario;

    }

    public static void guardarUsuario(Usuario usuario) throws SQLException{
        ConexionDB ConexionDB = null;

        Connection connection = ConexionDB.obtenerConexion();

        String sqlGuardar;

        sqlGuardar = "INSERT INTO usuarios (nombreUsuario, apellidoUsuario, mailUsuario, " +
                "contraseniaUsuario, imgUsuario) VALUES (?,?,?,?,?)";

        PreparedStatement stmt = connection.prepareStatement(sqlGuardar);

        stmt.setString(1, usuario.getNombreUsuario());
        stmt.setString(2, usuario.getApellidoUsuario());
        stmt.setString(3, usuario.getMailUsuario());
        stmt.setString(4, usuario.getContraseniaUsuario());
        stmt.setBlob(5, usuario.getImgUsuario());
        stmt.executeUpdate();
    }
}