
from flask import Flask, jsonify,render_template
from flask_pymongo import PyMongo

app = Flask(__name__)

# Replace the connection string with your own MongoDB connection string
app.config['MONGO_URI'] = 'mongodb+srv://tavish:<UU30dQ1ZKzaOCWg0>@cluster0.ro3hdk0.mongodb.net/'
mongo = PyMongo(app)



@app.route('/')
def login():
    return render_template("duplicate.html")

@app.route('/page1')
def register():
    return render_template("page2.html")

@app.route('/page2.html')
def register1():
    return render_template("page2.html")

@app.route('/doctorsih1.html')
def register2():
    return render_template("doctorsih1.html")

@app.route('/community_review.html')
def register3():
    return render_template("community_review.html")

@app.route('/job_for_today.html')
def xyz():
    return render_template("jobs_for_today.html")

@app.route('/patient_records.html')
def xyz1():
    return render_template("patient_records.html")

@app.route('/jobs_for_today_2.html')
def xyz2():
    return render_template("jobs_for_today_2.html")

@app.route('/docavailable.html')
def xyz3():
    return render_template("docavailable.html")
if __name__ == '__main__':  
    app.run(debug=True)
