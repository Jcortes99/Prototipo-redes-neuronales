from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()
templates = Jinja2Templates(directory="src")
app.mount("/src", StaticFiles(directory="src/"), name="src")
@app.get("/", response_class=HTMLResponse)
async def hello(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/datos")
async def procesar_datos(datos: dict):
    # Aquí procesas los datos recibidos en formato JSON
    # por ejemplo, guardarlos en una base de datos o
    # realizar algún cálculo.
    print(datos)
    return {"mensaje": "Datos recibidos correctamente.", "data":datos}
