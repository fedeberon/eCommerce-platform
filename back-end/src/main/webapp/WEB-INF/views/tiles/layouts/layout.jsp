<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8">
    <title><tiles:getAsString name="title" /></title>

     <link href="<c:url value='/static/css/app.css' />" rel="stylesheet">
     <link href="<c:url value='/assets/plugins/fontawesome-free/css/all.min.css' />" rel="stylesheet">
     <link href="<c:url value='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' />" rel="stylesheet">
     <link href="<c:url value='/assets/dist/css/adminlte.min.css' />" rel="stylesheet">
     <link href="<c:url value='/assets/plugins/daterangepicker/daterangepicker.css' />" rel="stylesheet">
     <link href="<c:url value='/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css' />" rel="stylesheet">
     <link href="<c:url value='/assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css' />" rel="stylesheet">
     <link href="<c:url value='/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css' />" rel="stylesheet">
     <link href="<c:url value='/assets/plugins/select2/css/select2.min.css' />" rel="stylesheet">
     <link href="<c:url value='/assets/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css' />" rel="stylesheet">
     <link href="<c:url value='/assets/dist/css/adminlte.min.css' />" rel="stylesheet">
     <link href="<c:url value='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' />" rel="stylesheet">
</head>
<body>
<div class="wrapper">
    <tiles:insertAttribute name="header" />
    <tiles:insertAttribute name="menu" />

        <tiles:insertAttribute name="body" />

    <tiles:insertAttribute name="footer" />
</div>
<script type="text/javascript" src='<c:url value="/assets/plugins/jquery/jquery.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/bootstrap/js/bootstrap.bundle.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/dist/js/adminlte.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/chart.js/Chart.min.css"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/dist/js/demo.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/dist/js/pages/dashboard3.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/select2/js/select2.full.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/moment/moment.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/inputmask/min/jquery.inputmask.bundle.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/daterangepicker/daterangepicker.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/plugins/bootstrap-switch/js/bootstrap-switch.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/dist/js/adminlte.min.js"/>'></script>
<script type="text/javascript" src='<c:url value="/assets/script.js"/>'></script>

</body>
</html>
