import pymysql
#database connection
connection = pymysql.connect(host="aws.connect.psdb.cloud", user="dxclswh0un0jd186ch38", passwd="pscale_pw_kkGt7xrygS0FMGG84O9yw2aTbE66kR6yBCw1R1BJNS5", database="sihtechbios1")
cursor = connection.cursor()
#inserting data to db
def add_text(text_value):
    cursor.execute("INSERT INTO id(id) VALUES (DEFAULT, %s)", (text_value))
    connection.commit()
    return 1