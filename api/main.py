import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth, workouts, routines
from database import Base, engine

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['https://workout-website-rqt9.onrender.com:8000'],  # Replace with your frontend's Render URL
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get("/")
def health_check():
    return 'Health check complete'

app.include_router(auth.router)
app.include_router(workouts.router)
app.include_router(routines.router)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
