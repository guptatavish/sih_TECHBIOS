
from flask import Flask, jsonify,render_template
import pymysql
pymysql.version_info=(1,4,6,'final',0)
pymysql.install_as_MySQLdb()

app = Flask(__name__)

host = 'localhost'
user = 'root'
password = 'tavish99'
database = 'sih'
connection = pymysql.connect(host=host, user=user, password=password, database=database)
cursor = connection.cursor()




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
    sql="SELECT * FROM doc"
    cursor.execute(sql)
    data=cursor.fetchall()
    return render_template("community_review.html",data=data)

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
    app.run(debug=True,port=8000)
