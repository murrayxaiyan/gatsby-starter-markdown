---
date: "2019-08-02"
title: Resumen del proyecto
root: "/blog"
---

## Estadísticas del proyecto

En el menú [summary](https://dev.azure.com/devopsreuniones/reuniones-devops) encontrará un resumen del estado del proyecto, como se muestra a continuación.

![image.png](/images/image-b4b62248-e3b8-4cbc-82d0-6437eaa3193c.png)


En el se revelan los detalles principales del avance del proyecto:

###**Boards**
Los boards representan el avance a nivel de proyecto, identificando las tareas y sus avances, [para mas detalles vea Scrum](/Scrum)

### Work items created
Los work items son el nivel fundamental en la gestión de proyectos ágiles, estos se conforman por tres tipos, como epics, Ussue y task. 

![image.png](/images/image-b3efc24c-2423-4c12-9f8b-ce6ed78470b9.png)

**Epic**
Un epic representa un conjunto de issues, en la gestión de proyectos de software se considera como un gran conjunto, que puede ser un módulo dentro del programa que abarque más de una iteración. Normalmente un Epic se compone de issues.

**Issue**
Un issue representa un requerimiento, un error o una solicitud, demandada por alguien de parte del equipo o de los stakeHolders. Un issue puede tener una o muchas tareas.

**Task**
El equipo encargado de planificar los niveles anteriores, divide el esfuerzo en tareas, donde se determina la prioridad y el esfuerzo de esta.

Para que el equipo de desarrollo pueda análizar y planificar un requerimiento, se debe crear un Issue, con sus detalles.

**El número representado aquí es el número total de tareas en los últimos 7 días.**

### Work Items Completed
**Representa el número de tareas que han sido completadas**

### **Repos**
Los repos representan el avance de las tareas en relación al código construido.

**Pull Requests**
Un pull request representa una solicitud de cambio en la rama principal, es decir, al proyecto que se encuentra en producción. 

Los cambios deben ser testeados y verificados antes de ser puestos en producción, el pull request añade dicha seguridad.

![image.png](/images/image-fdfae0c2-0e3c-4e26-839d-78da5e19d981.png)

Como se puede apreciar en el anterior diagrama, cada desarrollador debe tomar una copia del código de producción y solo realizar un pull request (solicitud de modificación a producción) cuando el requerimiento haya terminado.

Una vez terminado, se deberá aprobar para que sea incorporado a la rama principal (producción).

**El número indica la cantidad de cambios a la rama principal que se han realizado.**

**Commits**
Los commits representan cada avance de trabajo, cada vez que un desarrollador considera registrar un avance, este estará disponible para ver cada detalle del avance de los requerimientos.

![image.png](/images/image-e96c9eae-a178-45e4-8fcf-01e8f48fb85a.png)



**El número indica la cantidad de cambios totales en el proyecto.**



### **Pipelines**

Los procesos de pipelines están relacionados con la integración y entrega continua.

Posterior al pull request se debe aprobar o no el cambio, de ser aprobado entra a un proceso automatizado que construye el código, verifica las pruebas internas de código y finalmente libera a producción.

![image.png](/images/image-5b12f5dd-ffd5-4ffe-96d7-4d27077c2817.png)

### Builds

Los builds representan un proceso automatizado encargado de construir el código y posteriormente ejecutar las pruebas construidas. Cada build genera una versión nueva de la aplicación.


En la siguiente imagen se puede apreciar los test que lograron pasar en la construcción.

![image.png](/images/image-ef4f1a41-0c71-4527-b545-19c6fd82e735.png)

Los test son piezas de código que prueban otras piezas de código, en la siguiente imagen se puede apreciar las pruebas desarrolladas para una iteración.

![image.png](/images/image-fda46d3d-9be0-4242-8f45-75eb2f045ead.png)

**El número representa el % de builds que resultaron exitosos**

### Deployments
Los deployments son un proceso automático de puesta en producción, es en este proceso en el que el programa es distribuido y queda disponible para su uso con las nuevos requerimientos.  

En la siguiente imagen se puede apreciar como posterior al build, un proceso automático es el encargado de actualizar la aplicación en azure.


![image.png](/images/image-75ee74cd-c302-409f-bf42-5ebac6f15fc6.png)

**El número indica el porcentaje de liberación de releases exitosos.**

