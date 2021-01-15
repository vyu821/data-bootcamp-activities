# import necessary libraries
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)

# shelter statistics
shelter_stats = {
    "pets_adopted":120,
    "pets_for_adoption":20
}

# List of animal types at the shelter
pet_types = ["Cats","Dogs","Rabbits","Alpacas"]

# List of dictionaries
featured_pets = [{"name": "Fido", "type": "dog"},
                 {"name": "Rex", "type": "cat"},
                 {"name": "Suzy", "type": "rabbit"},
                 {"name": "Tomato", "type": "alpaca"}]

# create route that renders index.html template
@app.route("/")
def index():

    return render_template("index.html", stats=shelter_stats, types=pet_types, featured=featured_pets)


if __name__ == "__main__":
    app.run(debug=True)
