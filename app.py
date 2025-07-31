from flask import *
import time

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', time=time)

@app.route('/registration')
def registration():
    return render_template('registration.html', time=time)

@app.route('/login')
def login():
    return render_template('login.html', time=time)

@app.route('/my-profile')
def my_profile():
    return render_template('my-profile.html', time=time)

@app.route('/profile')
def profile():
    return render_template('profile.html', time=time)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)