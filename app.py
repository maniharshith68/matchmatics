import os
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Replace values accordingly
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define a sample model
class all_sports(db.Model):
    sports_id = db.Column(db.Integer, primary_key=True)
    sports_name = db.Column(db.String(50))

@app.route('/')
def home():
    sports = all_sports.query.all()
    return render_template('index.html', sports=sports)

if __name__ == '__main__':
    app.run()
