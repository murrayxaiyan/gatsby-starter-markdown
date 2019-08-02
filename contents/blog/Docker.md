---
date: "2019-08-02"
title: Docker
root: "/blog"
---

#Introducción

##¿Qué es Docker?
Docker es un software gratuito desarrollado por [Docker Inc.](https://en.wikipedia.org/wiki/Docker,_Inc.) Fue presentado al público en general el 13 de marzo de 2013 y se ha convertido desde ese día en una necesidad en el mundo del desarrollo de Tecnologías de la información (TI).

Permite a los usuarios crear entornos independientes y aislados para lanzar e implementar sus aplicaciones. Estos entornos se denominan contenedores.

Esto permitirá que el desarrollador ejecute un contenedor en cualquier máquina.

Como puede ver, con Docker, no hay más problemas de dependencia o compilación. Todo lo que tiene que hacer es iniciar su contenedor y su aplicación se iniciará de inmediato.

##Pero, ¿es Docker una máquina virtual?
Esta es una de las preguntas más frecuentes sobre Docker. La respuesta es: en realidad, no del todo.

Puede parecer una máquina virtual al principio, pero la funcionalidad no es la misma.

A diferencia de Docker, una máquina virtual incluirá un sistema operativo completo. Funcionará de forma independiente y actuará como una computadora.

Docker solo compartirá los recursos de la máquina host para ejecutar sus entornos.

[<IMG  src="https://i2.wp.com/blog.docker.com/wp-content/uploads/Blog.-Are-containers-..VM-Image-1-1024x435.png?ssl=1"/>](https://blog.docker.com/2018/08/containers-replacing-virtual-machines/)

##¿Por qué usar Docker como desarrollador?

Esta herramienta puede realmente cambiar la vida diaria de un desarrollador. Para responder mejor a esta pregunta, tenemos una lista no exhaustiva de los beneficios que encontrará:

- Docker es rápido. A diferencia de una máquina virtual, su aplicación puede iniciarse en unos segundos y detenerse con la misma rapidez.
- Docker es multiplataforma. Puedes lanzar tu contenedor en cualquier sistema.
- Los contenedores se pueden construir y destruir más rápido que una máquina virtual.
- No más dificultades para configurar su entorno de trabajo. Una vez que su Docker esté configurado, nunca más tendrá que reinstalar sus dependencias manualmente. Si cambia de equipo o si un empleado se une a su empresa, solo tiene que darles su configuración.
- Se mantendrá limpio su entorno de trabajo, ya que cada uno de sus entornos quedará aislado y podrá eliminarse en cualquier momento sin afectar al resto.
- Será más fácil implementar su proyecto en su servidor para ponerlo en línea.

En este documento se implementara docker en Ubuntu 18.04.2. Pero de cualquier manera puede encontrar las diferentes formas de instalarlo en otros sistemas operativos en la pagina oficial de [Docker](https://www.docker.com/).

#Instalación

1. Primero debemos asegurarnos de que tenemos nuestro sistema este actualizado:

```
sudo apt update
```

2. Instalar los paquetes para permitir que apt use un repositorio sobre HTTPS: 


```
sudo apt-get install \
     apt-transport-https \
     ca-certificates \
     curl \
     gnupg-agent \
     software-properties-common
```

3. Agregue la GPG key oficial de Docker:

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

Verifique que ahora tenga la clave con la huella digital 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88, buscando los últimos 8 caracteres de la huella digital.


```
sudo apt-key fingerprint 0EBFCD88
    
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```

4. Utilice el siguiente comando para configurar el repositorio estable.


```
sudo add-apt-repository \
     "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) \
     stable"
```

5. Actualizar el indice del apt package index

`sudo apt-get update`

6. Instale la última versión de Docker CE y Container:

`sudo apt-get install docker-ce docker-ce-cli containerd.io`

##Administrar Docker como un usuario no root

Para poder utilizar docker sin escribir el comando sudo debemos seguir estos pasos:

1. Crear el grupo docker 

`sudo groupadd docker` 

2. Agrega tu usuario al grupo docker.

`sudo usermod -aG docker $(whoami)`

3. Después de eso, reinicie el sistema y se aplicarán los cambios.

##Verificar instalación

Hay varias formas de verificar que docker se ha instalado correctamente. 
Puede verificar que docker se ha instalado verificando el estado del servicio con el comando `sudo systemctl status docker`. 
También puede utilizar el comando `docker --version`, `docker version` o `docker info`.

##Hello World

Pruebe escribiendo el comando `docker run hello-world`.
Esto ejecutara una imagen un hello world dentro de un contenedor y mostrara un mensaje en pantalla. Posteriormente podremos ver en mas detalle los comandos de docker.

#Imagenes vs Contenedores

Docker consta de imágenes y contenedores:

- Imágenes:  
  - Plantilla de solo lectura vacía o con una aplicación pre-instalada para la creación de contenedores
  - Creadas por nosotros o por la comunidad (DockerHub/Docker search)

- Contenedores:
  - Contiene lo necesario para ejecutar nuestras aplicaciones
  - Basados en una o más imágenes

![image.png](/.attachments/image-ef8c035a-0a3b-4333-8c27-ecd222b1a691.png)

Una imagen es la especificación inerte, inmutable, una foto del estado y de unas piezas de software que incluyen desde la aplicación que queremos ejecutar hasta las librerías y todo lo necesario para que corra encima del sistema operativo en el cual se ejecuta. 
Un contenedor es un entorno aislado con la instancia de una imagen, el cual se puede configurar.
Una analogía sería que la imagen es la clase y el contenedor el objeto de la clase.

#Hub de docker

[Docker Hub](https://docs.docker.com/docker-hub/) es un servicio proporcionado por Docker para buscar y compartir imágenes de contenedores con su equipo.

Para poder buscar una imagen nos dirigimos a la pagina https://hub.docker.com/

![image.png](/.attachments/image-a7655df3-e90a-46db-8382-2627de656a66.png)

Al buscar una imagen, por ejemplo de Ubuntu, nos arrojara varios resultados. En este caso nosotros accederemos a la imagen oficial de Ubuntu.

![image.png](/.attachments/image-967c5755-128d-48e8-ada0-7d514c4fd561.png)

Podemos fijarnos que nos aparece algo como esto:
![image.png](/.attachments/image-073d2d17-a56e-4557-9cf3-3b323320c8e7.png)

Eso quiere decir que con ese comando podemos descargar esa imagen en nuestro docker.

También podemos utilizar desde la consola el comando 
`docker search <nombre_imagen>` el cual nos mostrar resultados del hub en la misma consola. Luego el proceso es el mismo, utilizar docker pull para descargar esa imagen.

![image.png](/.attachments/image-ca64ee05-2434-4dd3-9aa5-cac69040e280.png)

##Tags

En palabras simples, los tags en docker transmiten información útil sobre una versión/variante específica de la imagen. Son un alias a la ID de la imagen que a menudo se parece a esto: `f1477ec11d12`. Es solo una forma de referirse a tu imagen. Una buena analogía es cómo las etiquetas Git se refieren a un compromiso en particular en su historial.

Cuando utilizamos el comando `docker pull debian:9.3` no estamos refiriendo a descargar la imagen con la version 9.3 de debian.
Si no especificamos algún tag al momento de hacer un pull, simplemente se descargara la imagen con el tag de "latest".

#Docker pull

`docker pull`, nos servirá para poder descargar imágenes desde el [hub de docker](#hub-de-docker)

![image.png](/.attachments/image-97934d9a-3fa8-4b78-bd68-dc7a0ae1d49a.png)

Hemos descargado una imagen de ubuntu.

#Comandos en imágenes

##Listar imágenes

Para poder ver las imágenes utilizamos `docker images`.
![image.png](/.attachments/image-70408881-611d-4e97-833a-8be402133bab.png)

##Eliminar una imagen especifica.

Para borrar una imagen utilizamos el comando 
`docker rmi <nombre de la imagen/image id>` 
![image.png](/.attachments/image-93dccc93-8dde-4b44-b1d0-ecf5519513af.png)
(Podemos de manera mas simple identificar una imagen con sus 3 primeros caracteres, mientras no se repita).

##Eliminar todas las imágenes

Para borrar todas las imágenes utilizamos el comando
`docker image rm $(docker images -a -q)`
![image.png](/.attachments/image-ff77ad14-4541-4d27-b5f8-11f214cdba34.png)

#Comandos en contenedores

##Listar contenedores en ejecución

`docker ps` es un comando que nos muestra los contenedores que estan en ejecución.
![image.png](/.attachments/image-211f8a5f-90ca-4a77-9f4f-cedc43bc6d95.png)

##Listar todos los contenedores
`docker ps -a` nos muestra los contenedores en ejecución y no ejecución.
![image.png](/.attachments/image-4f3f78cd-cd4a-4469-ab90-dcb613f76b7c.png)

##Detener un contenedor especifico

Para detener la ejecución de un contenedor especifico utilizamos el comando
`docker stop <nombre del contenedor/container id>`

![image.png](/.attachments/image-27f72fc6-a9af-46e4-a161-2a66918450ce.png)

##Parar todos los contenedores en ejecución

Para detener la ejecución de todos los contenedores utilizamos el comando
`docker stop $(docker ps -a -q)`
![image.png](/.attachments/image-54b51b93-d77f-41d1-87d0-2acf3c5b8c11.png)

##Ejecutar y reiniciar un contenedor

`docker start` nos sirve poner en ejecución un contenedor.
![image.png](/.attachments/image-f4d9b5ff-d7cd-4771-9616-d1750786732b.png)

`docker restart` nos sirve para re-ejecutar un contenedor.
![image.png](/.attachments/image-0872110b-2058-461b-930b-7b0e360a5e70.png)

##Borrar un contenedor especifico

Esto solo se puede hacer si el contenedor no esta en ejecución. Si queremos borrar un contenedor especifico utilizamos el comando
`docker rm <nombre del contenedor/container id>`
![image.png](/.attachments/image-1ef788f3-1e59-4f57-91d9-ac0a5314f99b.png)

##Borrar todos los contenedores

Esto solo se puede hacer si los contenedores no están en ejecución. Si queremos borrar un contenedor especifico utilizamos el comando
`docker rm $(docker ps -a -q)`
![image.png](/.attachments/image-8267ff02-af65-46c2-b0b0-c9a13ad58221.png)

#Docker run

`docker run` es un comando que nos sirve para iniciar un contenedor con la imagen que nosotros seleccionemos.
`docker run <nombre imagen/image id>`
En este caso utilizamos `docker run hello-word` lo cual hace que ejecute el mensaje y luego se termina.
![image.png](/.attachments/image-c0c76f0d-1b69-47f9-a60b-f4c64f216a03.png)

Pero si queremos hacer un `docker run` de por ejemplo una imagen de Ubuntu se nos cerrara y no podremos hacer nada.
![image.png](/.attachments/image-5db5eb3c-65b0-4da7-8cd9-c3a91067c706.png)
Ahí se nos ejecuto la imagen de Ubuntu en el contenedor y luego el contenedor se detuvo ya que no contaba con ninguna instrucción.

Podemos pasar una instrucción a nuestro contenedor, en este caso al ejecutar una imagen de ubuntu le diremos que nos muestre el directorio de esa imagen en pantalla.
![image.png](/.attachments/image-1988c9f8-7636-4c8e-83cc-768ad6e96e6f.png)

Nos ha mostrado la instrucción que le dimos pero, al igual que el ejemplo anterior, se nos ha detenido el contenedor. Para poder ingresar a nuestro contenedor y poder crear archivos, realizar operaciones, etc. podemos crear un [contenedor interactivo](#crear-contenedor-interactivo).

##Crear contenedor interactivo

Podemos crear un contenedor que sea mas interactivo con el comando

`docker run -i -t <nombre de imagen/imagen id>`
(las opciones en docker run se pueden juntar, por lo que utilizar `-it` en vez de 
`-i -t` realizara la misma operación.

![image.png](/.attachments/image-c73e4a1c-1021-4016-8f59-02f7785ac757.png)
Aquí podemos ver como al crear el contenedor nos metemos dentro de él y pudimos ver el directorio, crear e ingresar a una carpeta y crear un archivo.txt . Tan solo con escribir exit nos saldremos del contenedor, pero al salirnos se detendrá denuevo.

##Crear contenedor con nombre

Para poder distinguir cada uno de nuestros contenedores podemos utilizar el comando 
`docker run --name <nombre>`

![image.png](/.attachments/image-7272c8e7-55c7-455e-a2b9-e18e2073675c.png)

Si no asignamos un nombre al contenedor, de igual manera se nos asignara un simpático nombre aleatorio.

##Salir de contenedor interactivo sin detenerlo

Si bien podemos crear un contenedor interactivo, también podemos dejar ese contenedor en ejecución. Esta opción es la mas utilizada ya que nos permite dejar en producción algún entorno de trabajo que requiera de una conexión constante.

Tenemos 2 opciones, podemos crear un [contenedor interactivo](#crear-contenedor-interactivo) y luego dentro presionar las teclas `ctrl + p q`. Esta combinación de teclas hará que nuestro contenedor se mantenga en ejecución al momento de salirnos.

También podemos dejar en ejecución el contenedor con la opción `-d`.
Si utilizamos el comando `docker run -itd --name mi-contenedor ubuntu:latest` crearemos un contenedor con la imagen de ubuntu:latest, con nombre "mi-contenedor" que se mantendrá en ejecución y que además es interactivo.

![image.png](/.attachments/image-232b8667-d510-4fbb-92ce-ae86e5e092b0.png)

##Contarnos a un contenedor en ejecución

Si nosotros tenemos un contenedor en ejecución que es interactivo, y queremos entrar a su terminal para hacer alguna configuración, etc. podemos usar el comando `docker attach <nombre del contenedor/container id>`.
![image.png](/.attachments/image-4f9849e7-da83-4656-a99a-65a1baf44891.png)
Recordar que al salir escribiendo exit se nos detendrá el contenedor, por que debemos recordar como [mantenerlo en ejecución.](#salir-de-contenedor-interactivo-sin-detenerlo)

##Personalizar un contenedor

Vamos a realizar unas configuraciones a la imagen de ubuntu:latest que tenemos descargada, además poniendo en practica lo básico que ya hemos aprendido.
Primero crearemos un nuevo contenedor interactivo y lo dejaremos en ejecución:
`docker run -itd --name ubuntu-updated ubuntu:latest`

Luego entraremos en él contenedor para realizar sus configuraciones:
`docker attach ubuntu-updated`

probaremos realizar un ifconfig en nuestro contenedor
![image.png](/.attachments/image-909800a7-6060-4dab-a83f-186ae7fcdc38.png)

Como nos damos cuenta la imagen de ubuntu no tiene nada por eso, lo primero que haremos sera realizar un update y un upgrade.
```
apt-get update
apt-get upgrade
```
Ahora instalaremos las herramientas de red:
`apt-get install net-tools`
y por último probaremos un `ifconfig`.

Ahora que hemos realizado esa configuración si nos salimos del contenedor y luego volvemos a entrar, `ifconfig` ya ha quedado instalada, por lo que hemos personalizado una imagen de ubuntu dentro de nuestro contenedor.

##Crear una imagen a partir de un contenedor

Podemos crear una imagen a partir de un contenedor. En el [ejemplo anterior](#personalizar-un-contenedor), instalamos `ifconfig` en un ubuntu, lo que haremos ahora sera crear una imagen de ubuntu de acuerdo a la personalización que ya realizamos en el contenedor anterior.

Para ellos debemos utilizar el comando 
`docker commit ubuntu-updated ifconfig`

![image.png](/.attachments/image-f8129234-a4f3-4c42-b36a-e9559a92bb86.png)

y ahora solo crearemos un contenedor de esa imagen y comprobaremos que ifconfig este instalado.
![image.png](/.attachments/image-7c50e86f-7be8-4011-8f66-c9207797507b.png)

Listo, ya hemos creado nuestro nuevo contenedor basado en una imagen que tiene la configuración de otro contenedor.

#Ejercicio

Pondremos en práctica lo aprendido para ellos haremos el siguiente ejercicio: levantar múltiples contenedores con apache2.

Crear un contenedor con una imagen de ubuntu y luego actualizarlo.

```
$ docker run -itd --name mi-contenedor ubuntu:latest
$ docker attach mi-contenedor
# apt-get update
# apt-get upgrade
```
Ahora dentro del contenedor instalaremos `apache2`.
```
# apt-get install apache2
# service apache2 start
# service apache2 status
```
Ahora que hemos comprobado que `apache2` esta funcionando correctamente nos saldremos del contenedor `ctrl + p q`.

Ahora haremos un `docker commit` para crear una imagen basada en el ubuntu en el que acabamos de instalar apache2.

Usaremos el comando 
`docker commit --change='CMD ["apache2ctl", "-D", "FOREGROUND"]' -c "EXPOSE 85" mi-contenedor apache2`

No nos preocupemos ahora que significa el comando que acabamos de ingresar ya que veremos este tipo de comandos en la sección de [Dockerfile](#dockerfile).

![image.png](/.attachments/image-58c0267d-90ff-4640-9afa-8af3a989b44c.png)
Una vez hecho el commit revisaremos y después crearemos un contenedor con el comando
`docker run -d -p 5000:80 apache2`

Y listo, ya hemos dejado ejecutando el nuevo contenedor en el puerto 5000, el cual ya viene con apache2 instalado.

Si entramos a un navegador y ponemos `localhost:5000` nos saldrá:
![image.png](/.attachments/image-cf789b8b-87fd-412c-8d76-726a0254121a.png)

Probemos ahora levantar otra imagen de apache2 en otro contenedor con otro puerto.
`docker run -d -p 5001:80 apache2`

![image.png](/.attachments/image-4f901940-7a83-4a25-b706-ed07de42123f.png)

Como pueden ver tenemos en ejecución otro contenedor con la misma imagen de apache2 y si ahora en otra pestaña del navegador revisan el puerto 5001 verán el mismo resultado.

Con este ejercicio hemos descubierto que podemos levantar múltiples servicios con tan solo un par de comandos.

<IMG  src="https://kgrvamsi.files.wordpress.com/2015/06/docker_ryu-e1431444592428.png"/>


#Dockerfile

Podemos usar los contenedores disponibles en [Docker Hub](https://hub.docker.com/), donde están disponibles las aplicaciones de bases de datos, servidores de aplicaciones de múltiples lenguajes, servidores web más populares y entre otras muchas. Pero también podemos definir nuestras propias imágenes personalizadas con las necesidades que tengamos. Lo que necesitamos es escribir un archivo que contenga la receta para construir la imagen del contenedor, este archivo es el Dockerfile.

<IMG  src="https://www.josedomingo.org/pledin/assets/wp-content/uploads/2016/02/dockerfile.png"/>

##Introducción a Dockerfile

Un Dockerfile es un fichero de texto donde indicamos los comandos que queremos ejecutar sobre una imagen base para crear una nueva imagen. El comando 
`docker build` construye la nueva imagen leyendo las instrucciones del fichero Dockerfile y la información de un entorno, que para nosotros va a ser un directorio.

La creación de la imagen es ejecutada por el docker engine, que recibe toda la información del entorno, por lo tanto es recomendable guardar el Dockerfile en un directorio vacío y añadir los ficheros necesarios para la creación de la imagen. El comando docker build ejecuta las instrucciones de un Dockerfile línea por línea y va mostrando los resultados en pantalla.

Tenemos que tener en cuenta que cada instrucción ejecutada crea una imagen intermedia, una vez finalizada la construcción de la imagen nos devuelve su _id_. Alguna imágenes intermedias se guardan en caché, otras se borran. Por lo tanto, si por ejemplo, en un comando ejecutamos `cd /scripts/` y en otra linea le mandamos a ejecutar un script (`./install.sh`) no va a funcionar, ya que ha lanzado otra imagen intermedia. Teniendo esto en cuenta, la manera correcta de hacerlo sería:

`cd /scripts/;./install.sh`

La creación de imágenes intermedias generadas por la ejecución de cada instrucción del Dockerfile, es un mecanismo de caché, es decir, si en algún momento falla la creación de la imagen, al corregir el Dockerfile y volver a construir la imagen, los pasos que habían funcionado anteriormente no se repiten ya que tenemos a nuestra disposición las imágenes intermedias, y el proceso continúa por la instrucción que causó el fallo.

##Práctica

Para poner todo esto en practica crearemos un Dockerfile que haga lo mismo que el [ejercicio](#ejercicio) anterior. 

En cualquier editor de texto crearemos un archivo llamado `Dockerfile` y lo completaremos con las siguientes instrucciones.

![image.png](/.attachments/image-49d968d6-c26b-4c0c-863c-a2fd4196d1ea.png)

En este caso, este archivo Dockerfile hace lo siguiente:
- Creara una nueva imagen a partir de la imagen `ubuntu:latest` del dockerhub. 
- Esto se hará a nombre del maintainer, osea quien creo esta imagen. 
- Luego hará un `apt-get update` para obtener las actualizaciones.
- Posteriormente se instalara apache2 mediante el comando `apt-get -y install apache2` (se debe dejar el flag `-y` para que pueda aceptar la instalación). 
- Después se expondrá por defecto el puerto 80.
- Finalmente se ejecutara el servicio apache2ctl.

Como se puede apreciar un `Dockerfile` sigue una estructura muy pautada de los comandos que se ejecutan, lo cual hace que sea sencillo especificar instrucciones en el orden que se requieran.

Ahora que ya tenemos nuestro archivo Dockerfile creado debemos utilizar el comando
`docker build`. 
El comando `docker build` nos permite generar una nueva imagen a partir de un archivo Dockerfile, para ello se debe especificar la ruta en la que se encuentra el archivo Dockerfile a ejecutar. Con la opción `-t <nombre_imagen>` especificamos el nombre que le queremos dar a la nueva imagen buildeada.

![image.png](/.attachments/image-94ba85a9-961b-4744-88d9-2b41e661f1e8.png)

Podemos ver que apenas ejecutamos el comando nos comienza a ejecutar todas las instrucciones del archivo Dockerfile y comenzara a descargar, instalar y ejecutar todo lo que le especificamos. 
Se debe tener en cuenta que las instrucciones que se le dan a un Dockerfile deben ser por linea de comandos.

![image.png](/.attachments/image-b60b9f5b-76b8-4064-a179-5d0af7684721.png)

Si revisamos con `docker images` nos damos cuenta que nuestra imagen ya se ha creado, por lo tanto es hora de llevarla a un contenedor con el comando 
`docker run`.

Ejecutamos `docker run -d -p 8000:80 --name web_apache2 apache2_img` y comprobamos con `docker ps`.

![image.png](/.attachments/image-98b59c2d-0dec-4715-a58a-17be541233c1.png)

Ahora abriremos un navegador para visualizarlo.
![image.png](/.attachments/image-aa8d11c2-8f46-49d9-9833-1ef60f729fff.png)

Listo, hemos creado una imagen que viene con apache2 listo para su funcionamiento pero, aun no entendemos muy bien que significa cada [instrucción del Dockerfile](#instrucciones-de-dockerfile).

##Instrucciones de Dockerfile 

En esta sección se hará una introducción al uso de las instrucciones más usadas que podemos definir dentro de un fichero Dockerfile, para una descripción más detallada pueden consultar la [documentación oficial](https://docs.docker.com/engine/reference/builder/).

###**FROM**
FROM indica la imagen base que va a utilizar para seguir futuras instrucciones. Buscará si la imagen se encuentra localmente, en caso de que no, la descargará de internet.

**Sintaxis**

```
FROM <imagen>
FROM <imagen>:<tag>
```

###**MAINTAINER**
Esta instrucción nos permite configurar datos del autor que genera la imagen.

**Sintaxis**

`MAINTAINER <nombre> <Correo>`

###**RUN**
Esta instrucción ejecuta cualquier comando en una capa nueva encima de una imagen y hace un commit de los resultados. Esa nueva imagen intermedia es usada para el siguiente paso en el `Dockerfile`. `RUN` tiene 2 formatos:

- El modo shell: `/bin/sh -c`

  `RUN comando`

- Modo ejecución:

  `RUN ["ejecutable", "parámetro1", "parámetro2"]`

  El modo ejecución nos permite correr comandos en imágenes bases que no cuenten con `/bin/sh`, nos permite además hacer uso de otra shell si así lo deseamos, ejemplo:

  `RUN ["/bin/bash", "-c", "echo prueba"]`

###**ENV**
Esta instrucción configura las variables de ambiente, estos valores estarán en los ambientes de todos los comandos que sigan en el `Dockerfile`.

**Sintaxis**


```
ENV <key> <value>
ENV <key>=<value> ...
```

Estos valores persistirán al momento de lanzar un contenedor de la imagen creada y pueden ser usados dentro de cualquier fichero del entorno, por ejemplo un script ejecutable. Pueden ser sustituida pasando la opción `-env` en `docker run`. Ejemplo:

`docker run -env <key>=<valor>`

###**ADD**
Esta instrucción copia los archivos o directorios de una ubicación especificada y los agrega al sistema de archivos del contenedor en la ruta especificada. Tiene dos formas:

**Sintaxis**


```
ADD <src>... <dest>
ADD ["<src>",... "<dest>"]
```

###**EXPOSE**
Esta instrucción le especifica a docker que el contenedor escucha en los puertos especificados en su ejecución. `EXPOSE` no hace que los puertos puedan ser accedidos desde el host, para esto debemos mapear los puertos usando la opción `-p` en `docker run`.

**Ejemplo:**

`EXPOSE 80 443`

###**CMD y ENTRYPOINT**
Estas dos instrucciones son muy parecidas, aunque se utilizan en situaciones diferentes, y además pueden ser usadas conjuntamente, en el [siguiente artículo](https://www.ctl.io/developers/blog/post/dockerfile-entrypoint-vs-cmd/) se explica muy bien su uso.

Estas dos instrucciones nos permiten especificar el comando que se va a ejecutar por defecto, sino indicamos ninguno cuando ejecutamos el `docker run`. Normalmente las imágenes bases (debian, ubuntu,…) están configuradas con estas instrucciones para ejecutar el comando `/bin/sh` o `/bin/bash`. Podemos comprobar el comando por defecto que se ha definido en una imagen con el siguiente comando:


```
$ docker inspect debian
...
"Cmd": [
                  "/bin/bash"
       ],
...
```

Por lo tanto no es necesario indicar el comando como argumento, cuando se inicia un contenedor:

`$ docker run -i -t  debian`

En el siguiente gráfico puedes ver los detalles de algunas imágenes oficiales: su tamaño, las capas que la conforman y el comando que se define por defecto:

<IMG  src="https://www.josedomingo.org/pledin/assets/wp-content/uploads/2016/02/image-layers.png"  alt="image-layers"/>

####**CMD**

`CMD` tiene tres formatos:

- Formato de ejecución:

  `CMD ["ejecutable", "parámetro1", "parámetro2"]`

- Modo shell:

  `CMD comando parámetro1 parámetro2`

- Formato para usar junto a la instrucción ENTRYPOINT

  `CMD ["parámetro1","parámetro2"]`

Solo puede existir una instrucción `CMD` en un `Dockerfile`, si colocamos más de una, solo la última tendrá efecto.Se debe usar para indicar el comando por defecto que se va a ejecutar al crear el contenedor, pero permitimos que el usuario ejecute otro comando al iniciar el contenedor.

####**ENTRYPOINT**

`ENTRYPOINT` tiene dos formatos:

- Formato de ejecución:

  `ENTRYPOINT ["ejecutable", "parámetro1", "parámetro2"]`

- Modo shell:

  `ENTRYPOINT comando parámetro1 parámetro2`

Esta instrucción también nos permite indicar el comando que se va ejecutar al iniciar el contenedor, pero en este caso el usuario no puede indicar otro comando al iniciar el contenedor. Si usamos esta instrucción no permitimos o no  esperamos que el usuario ejecute otro comando que el especificado. Se puede usar junto a una instrucción `CMD`, donde se indicará los parámetro por defecto que tendrá el comando indicado en el `ENTRYPOINT`. Cualquier argumento que pasemos en la línea de comandos mediante `docker run` serán anexados después de todos los elementos especificados mediante la instrucción `ENTRYPOINT`, y anulará cualquier elemento especificado con `CMD`.

####**Ejemplo**

Si tenemos un fichero `Dockerfile`, que tiene las siguientes instrucciones:


```
ENTRYPOINT ["http", "-v"]

CMD ["-p", "80"]
```

Podemos crear un contenedor a partir de la imagen generada:

`docker run centos:centos7`: Se creará el contenedor con el servidor web escuchando en el puerto 80.
`docker run centos:centros7 -p 8080`: Se creará el contenedor con el servidor web escuchando en el puerto 8080.

##Buenas prácticas al crear Dockerfile

###Los contenedores deber ser “efímeros”
Cuando decimos “efímeros” queremos decir que la creación, parada, despliegue de los contenedores creados a partir de la imagen que vamos a generar con nuestro `Dockerfile` debe tener una mínima configuración.

###Uso de ficheros .dockerignore
Como hemos indicado anteriormente, todos los ficheros del contexto se envían al **docker engine**, es recomendable usar un directorio vacío donde vamos creando los ficheros que vamos a enviar. Además, para aumentar el rendimiento, y no enviar al daemon ficheros innecesarios podemos hacer uso de un fichero `.dockerignore`, para excluir ficheros y directorios. El fichero `.dockerignore` funciona de manera similar al conocido `.gitignore`.

###No instalar paquetes innecesarios
Para reducir la complejidad, dependencias, tiempo de creación y tamaño de la imagen resultante, se debe evitar instalar paquetes extras o innecesarios Si algún paquete es necesario durante la creación de la imagen, lo mejor es desinstalarlo durante el proceso.

###Minimizar el número de capas
Debemos encontrar el balance entre la legibilidad del `Dockerfile` y minimizar el número de capa que utiliza.

###Indicar las instrucciones a ejecutar en múltiples líneas
Cada vez que sea posible y para hacer más fácil futuros cambios, hay que organizar los argumentos de las instrucciones que contengan múltiples líneas, esto evitará la duplicación de paquetes y hará que el archivo sea más fácil de leer. Por ejemplo:


```
RUN apt-get update && apt-get install -y \
git \
wget \
apache2 \
php5
```

##docker-compose

##Docker swarm

##Referencias útiles

https://www.josedomingo.org/pledin/2016/02/dockerfile-creacion-de-imagenes-docker/

https://www.learnitguide.net/2018/06/dockerfile-explained-with-examples.html
