from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    users = [
        {"username": "traveler", "name": "Terry"},
        {"username": "photographer", "name": "Andy"},
        {"username": "gourmet", "name": "David"}
    ]
    return render_template('20240227-index.html', users=users)

if __name__ == '__main__':
    app.run(debug=True)