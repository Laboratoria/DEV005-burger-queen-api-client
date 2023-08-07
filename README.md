# Burger Queen (API Client)

![BurguesQueen](/src/assets/imgOfReadme/burgerQueen.png)

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Burger Queen](#2-Burger-queen)
* [3. Planificación](#3-planificación)
* [4. Como utilizar la app](#4-como-utilizar-la-app)
* [5. Desarrolladoras](#5-desarrolladoras)

***

## 1. Preámbulo

Las aplicaciones para la atención de servicios como restaurantes, bares,etc. son fundamentales
en la industria actual. Agilizan los procesos al permitir realizar pedidos 
rápidos, reservas de mesas y pagos directos. Estas herramientas brindan beneficios
tanto a los propietarios como a los clientes. 
El uso de la tecnología en este ambito mejora la experiencia del cliente y permiten
una gestión más efectiva, siendo una inversión valiosa para optimizar la atención en 
restaurantes en la era digital.

## 2. Burger Queen

Es un pequeño restaurante de hamburguesas, que está creciendo y se ha implementado un
sistema a través del cual puedan tomar pedidos usando una tablet y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

Sistema implementado con React y testeado con Jest.

Te invitamos a navegar en la aplicación ingresando a este link: 
(https://),

Accesos: 

|Mesero                   |Chef                   |Admin                  |
|-------------------------|-----------------------|-----------------------|
|email: waiter@bbq.com    |email: chef@bbq.com    |admin@bbq.com          |
|contraseña: 123456       |contraseña: 123456     |contraseña: 123456     |

![Bbq-vista-login](/src/assets/imgOfReadme/bbq01.png)

## 3. Planificación

La planificación del proyecto se realizó a través de GitHub Projetc ejecutandose 
6 historias de usuario y se prototipo en la plataforma de Figma.

### Historia de usuario

#### [HU 1] Mesero/a debe poder ingresar al sistema, si el administrador ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

***

#### [HU 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

***

#### [HU 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

***

#### [HU 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

***

#### [HU 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

***

#### [HU 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.


### Prototipos


![PrototipoBajaFidelidad](/src/assets/imgOfReadme/bajaFidelidad.png)

![PrototipoAltaFIdelidad](/src/assets/imgOfReadme/altaFidelidad.png)

***

## 4. Como utilizar la app

Al ingresar a la App, el usuario debe desempeñar una de las siguientes funciones:

Si eres administrador/a 👩‍💼 puedes:

1. Crear, editar, eliminar y actualizar productos y usuarios
2. Puede ver el estado de las órdenes creadas por el mesero

*** 

Si eres mesera/o 🤵 puedes:

1. Crear, editar y eliminar órdenes
2. Actualizar el estado de la orden de listo a entregado al momento de llevárselo al cliente


*** 
Si eres jefe/a de cocina 👩🏽‍🍳 puedes:

1. Ver las órdenes creadas por el mesero
2. Actualizar el estado de la orden de pendiente a listo al momento de terminar la preparación
3. Ver cuánto tiempo tardó preparando la orden

*** 


## 5. Desarrolladoras

* [Sofia Torres Vilca ](https://github.com/sofia-torres-v)
* [Claudia Ortiz LLamoca](https://github.com/ClauOrtiiz)
