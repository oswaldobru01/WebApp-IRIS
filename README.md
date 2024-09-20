# IRIS PRUEBA TECNICA
##Cabe aclarar  quiera desplegar la API de .NET pero actualmente no tengo los recursos de Azure y por parte de la WEB pudiera desplegar en muchas sitios normalmente uso (Netifly,Vercel entre otros). 
Este proyecto es una aplicación de gestión de tareas (ToDo List) que consta de una API construida con .NET 8 y una interfaz de usuario desarrollada con Angular 18. 
A continuación se detalla la estructura de ambos componentes y cómo interactúan.

## Estructura del Proyecto

#WEB Angular 18
1. Clonar el proyecto 
2. Instalar la librerias dentro de la carpeta del proyecto abrir un CMD escribir el siguiente comando
   
        Npm install

3. luego ejecutar el siguiente comando
   
        Ng serve


![image](https://github.com/user-attachments/assets/21137861-50e8-45e1-847d-cfca1addd5d0)



### API (.NET 8)
![image](https://github.com/user-attachments/assets/0b9a884b-91c3-4662-bb9e-9f1756d8b294)

La API está diseñada para manejar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para los elementos de la lista de tareas. Utiliza Entity Framework Core para la interacción con la base de datos.

ToDoListAPI

├── Controllers ── ToDoController.cs         

├── Data ── AppDbContext.cs           # DbContext para la base de datos


├── Models ── ToDoItem.cs               # Modelo de la entidad ToDoItem


├── Repositories ── IToDoRepository.cs        # Interfaz del repositorio


├── Repositories ── ToDoRepository.cs         # Implementación del repositorio


├── Services ── IToDoService.cs           # Interfaz del servicio


├── Services ── ToDoService.cs            # Implementación del servicio


├── appsettings.json              # Configuración de conexión a la base de datos y JWT


└── Program.cs                    # Archivo principal que arranca la aplicación


└── Startup.cs                    # Configuración de servicios, JWT y middleware


#### Endpoints de la API

- **GET /api/todo**: Obtiene todos los elementos de la lista de tareas.
- **POST /api/todo**: Crea un nuevo elemento en la lista de tareas.
- **PUT /api/todo/{id}**: Actualiza un elemento existente según su ID.
- **DELETE /api/todo/{id}**: Elimina un elemento de la lista según su ID.

#### Configuración

1. Clona el repositorio.
2. Abre el proyecto en Visual Studio.
3. Configura la cadena de conexión en `appsettings.json`.
   
        Data Source=TuEquipo;Initial Catalog=TodoListDB; TrustServerCertificate=True; Integrated Security=True;

5. Script de la base datos


 

        -- Crear la base de datos TodoListDB
        CREATE DATABASE TodoListDB;
        GO
        
        -- Usar la base de datos recién creada
        USE TodoListDB;
        GO
        
        -- Crear la tabla ToDoItems
        CREATE TABLE ToDoItems (
        
            Id INT PRIMARY KEY IDENTITY(1,1),  -- Identificador único para cada tarea
            
            Title NVARCHAR(100) NOT NULL,      -- Título de la tarea
            
            Description NVARCHAR(500) NULL,    -- Descripción detallada de la tarea
            
            IsCompleted BIT NOT NULL DEFAULT 0, -- Estado de la tarea (0 = Incompleta, 1 = Completa)
            
            CreatedAt DATETIME NOT NULL DEFAULT GETDATE()  -- Fecha de creación de la tarea
            
        );
        GO



## Instrucciones para Importar la Colección en Postman
 Dejare un archivo para la coleccion de postman .JSON

1. Abre Postman.
2. Haz clic en "Import".
3. Selecciona la pestaña "Raw text".
4. Copia y pega el JSON anterior.
5. Haz clic en "Import".
