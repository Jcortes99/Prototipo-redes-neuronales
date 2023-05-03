# Prototipo Dislexia Redes Neuronales 2023

## Integrantes.
    David Alejandro Ramírez Lara
    Jario Andrés Cortés Roncancio
    María Alejandra Muñoz Alarcón
    Victoria Adelaida Múnera Leal

---
## Instalación.

El sofware usa como Back-End FastAPI(Python en la versión 3.11)

### Pasos Opcionales:

Si desea puede instalar un venv de anaconda o pip para encapsular las dependencias.

### Pasos Obligatorios:
1. Instalar python.
2. Una vez instalado, se debe para en la carpeta Prototipo-redes-neuronales en el cmd, powershell o terminal.
3. Ejecutar el comando `pip install -r requirements.txt` para instalar las dependencias.

---
## Ejecución.

Ubicados en la consola (cmd, powershell o terminal) se ejecutan los siguientes comandos:

1. `uvicorn main:app --reload`
2. En consola te saldrá el siguiente mensaje: `Uvicorn running on http://127.0.0.1:8000` Seguramente te aparezca otra Ip, presiona CTR+click principal para que te abrá la aplicación en el navegaro
3. Disfrutar del prototipo

## Posibles errores:

Dependiendo la configuración del VENV o de la instalación de python te puede salir el siguiente error a la hora de llamar a uvicorn:

`uvicorn : El término 'uvicorn' no se reconoce como nombre de un cmdlet, función, archivo de script o programa ejecutable. Compruebe si escribió correctamente el nombre o, si incluyó una ruta de acceso, compruebe que dicha ruta es correcta e inténtelo de nuevo.`

Para evitar este problema ejecute el comando `python -m  uvicorn main:app --reload`

# CUAL QUIEN INQUIETUD CONTACTAR CON EL DESARROLLADOR O SOLUCIONELO USTED@, ES PROGRAMADOR ÉCHELE GANAS.