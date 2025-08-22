from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route('/node_modules/<path:filename>')
def node_modules(filename):
    """Serve files from node_modules with proper MIME types."""
    mimetype = 'application/javascript' if filename.endswith('.js') else None
    return send_from_directory('node_modules', filename, mimetype=mimetype)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
