<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Crear usuario</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="<c:url value='/home'/>">Inicio</a></li>
                        <li class="breadcrumb-item active">Crear usuario</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div class="col-md-6">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Completa los datos</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <c:url var="actionUrl" value="/usuario/save"/>
                        <form:form modelAttribute="user" action="${actionUrl}" method="POST">
                            <input type="hidden" name="usuario.id" value="${usuario.id}"/>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="mail">Correo electr&oacute;nico</label>
                                    <form:input path="mail" cssClass="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label for="username">Nombre de usuario</label>
                                    <form:input path="username" cssClass="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label for="password">Contrase&ntilde;a</label>
                                    <form:input path="password" cssClass="form-control"/>
                                </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </form:form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>