from flask import Flask, render_template
app = Flask(__name__)

app.confing['SECRET_KEY'] = '3dc489d47a83fbdbb3b64b467d0d6fdd771df646e092d66dac4e3276a20f334c'

posts = [
    {
        'author': 'Anacan Mangelsdorf',
        'title': 'Learning Flask',
        'content': "I don't know how I like server side-rendering",
        'datePosted': 'March 9, 2020'
    }, {
        'author': 'Anacan Mangelsdorf',
        'title': 'Mozilla thoughts',
        'content': 'I would really love to stop working with IPFS, the technology is frustrating',
        'datePosted': 'March 9, 2020'
    }
]


@app.route('/')
def home():
    return render_template('home.html', posts=posts)

@app.route('/about')
def about():
    return render_template('about.html', title='About')