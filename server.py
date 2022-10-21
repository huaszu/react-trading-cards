from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def show_homepage():
    """Show the application's homepage."""

    return render_template('homepage.html')


@app.route('/cards')
def show_cards():
    """Show all trading cards."""

    return render_template('cards.html')


@app.route('/about-the-authors')
def show_about_the_authors():
    """Show information about authors."""

    return render_template('about.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
