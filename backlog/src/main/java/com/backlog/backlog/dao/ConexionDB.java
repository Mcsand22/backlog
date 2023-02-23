package com.backlog.backlog.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionDB {

    //La directiva static permite el acceso a métodos y variables de clase sin la necesidad de instanciar un objeto de dicha clase
    public static Connection obtenerConexion() {

        String url = "jdbc:mysql://localhost:3306/backlog";

        String usuario = "root";
        String password = "";

        try {
            Connection connection = DriverManager.getConnection(url, usuario, password);
            return connection;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }


    }
}
