package com.backlog.backlog.domain;

import java.sql.Blob;

public class Usuario {
    private Integer idusuarios;
    private String nombreUsuario;
    private String apellidoUsuario;

    private String mailUsuario;

    private String contraseniaUsuario;

    private Blob imgUsuario;

    public Usuario(Integer idusuarios, String nombreUsuario, String apellidoUsuario, String mailUsuario, String contraseniaUsuario, Blob imgUsuario) {
        this.idusuarios = idusuarios;
        this.nombreUsuario = nombreUsuario;
        this.apellidoUsuario = apellidoUsuario;
        this.mailUsuario = mailUsuario;
        this.contraseniaUsuario = contraseniaUsuario;
        this.imgUsuario = imgUsuario;
    }

    public Usuario() {
    }

    public Integer getIdusuarios() {
        return idusuarios;
    }

    public void setIdusuarios(Integer idusuarios) {
        this.idusuarios = idusuarios;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getApellidoUsuario() {
        return apellidoUsuario;
    }

    public void setApellidoUsuario(String apellidoUsuario) {
        this.apellidoUsuario = apellidoUsuario;
    }

    public String getMailUsuario() {
        return mailUsuario;
    }

    public void setMailUsuario(String mailUsuario) {
        this.mailUsuario = mailUsuario;
    }

    public String getContraseniaUsuario() {
        return contraseniaUsuario;
    }

    public void setContraseniaUsuario(String contraseniaUsuario) {
        this.contraseniaUsuario = contraseniaUsuario;
    }

    public Blob getImgUsuario() {
        return imgUsuario;
    }

    public void setImgUsuario(Blob imgUsuario) {
        this.imgUsuario = imgUsuario;
    }
}
