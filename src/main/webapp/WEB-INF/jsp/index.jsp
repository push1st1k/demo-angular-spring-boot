<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Sample Angular Application</title>

    <link href="../../assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../assets/css/style.css" rel="stylesheet">
</head>
<body ng-app="testApp" ng-strict-di>
    <a ng-href="#/"><h2>Sample Spring Boot & AngularJS App</h2></a>
    <div class="col-md-offset-2 col-md-8" ng-view></div>

    <%--libs--%>
    <script type="text/javascript" src="../../assets/js/lib/jquery-2.1.3.min.js"></script>

    <script type="text/javascript" src="../../assets/js/lib/angular.js"></script>
    <script type="text/javascript" src="../../assets/js/lib/angular-route.js"></script>
    <script type="text/javascript" src="../../assets/js/lib/angular-resource.js"></script>
    <script type="text/javascript" src="../../assets/js/lib/angular-animate.js"></script>

    <script type="text/javascript" src="../../assets/js/lib/bootstrap.min.js"></script>
    <%--end libs--%>

    <script type="text/javascript" src="../../assets/js/app.js"></script>
    <script type="text/javascript" src="../../assets/js/controllers.js"></script>
    <script type="text/javascript" src="../../assets/js/services.js"></script>
    <script type="text/javascript" src="../../assets/js/directives.js"></script>
</body>
</html>
