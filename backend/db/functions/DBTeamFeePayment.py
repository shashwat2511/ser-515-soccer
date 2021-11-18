import psycopg2
import configparser


class DBTeamFeePayment(object):

    def __init__(self):
        config = configparser.ConfigParser()
        config.read('./db/functions/DBConfig.ini')
        self.host = config['PostgresDB']['host']
        self.port = config['PostgresDB']['port']
        self.database = config['PostgresDB']['database']
        self.user = config['PostgresDB']['user']
        self.password = config['PostgresDB']['password']

    def insert_team_fee_payment(self, team_id, payment_amount):
        try:
            connection = psycopg2.connect(
                user=self.user,
                password=self.password,
                host=self.host,
                port=self.port,
                database=self.database,
            )
            cursor = connection.cursor()
            insert_query = """ 
            INSERT INTO public.payment (payment_amount,team_id)
            VALUES (%s,%s) 
            RETURNING payment_id"""
            record_to_insert = (
                team_id, payment_amount
            )
            cursor.execute(insert_query, record_to_insert)
            connection.commit()
            connection.close()
            return_msg = {
                "message": "Payment successfully completed for team_id = %s."
                           + "Congrats!!! You are now enrolled to the tournament." % (team_id),
                "payment_success": True
            }
            return return_msg
        except (Exception, psycopg2.Error) as error:
            print("Failed to insert record into payment table", error)
            return {
                "message": "Failed to insert payment record. Payment already exist for team_id = %s" % (team_id),
                "payment_success": False
            }

    def select_team_fee_payment(self, team_id):
        try:
            connection = psycopg2.connect(
                user=self.user,
                password=self.password,
                host=self.host,
                port=self.port,
                database=self.database,
            )
            cursor = connection.cursor()
            select_query = """ 
            SELECT array_agg(row_to_json(t)) from 
                (SELECT * from public.payment where team_id=%s ) t
            """
            cursor.execute(select_query, (team_id,))
            payment_json = cursor.fetchall()
            connection.close()
            return payment_json[0][0]
        except (Exception, psycopg2.Error) as error:
            print("Failed to select record into payment table", error)
