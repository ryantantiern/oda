from flask import Flask
from flask import render_template
app = Flask(
    __name__,
    template_folder="build/",
    static_folder="build/static"
            )

@app.route('/')
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.config.from_object("config.DevelopmentConfig")
    app.run(host="127.0.0.1", port="8080")
