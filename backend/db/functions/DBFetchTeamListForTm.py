import psycopg2
import configparser
from datetime import datetime


class DBFetchTeamListForTm(object):

    def __init__(self):
        config = configparser.ConfigParser()
        config.read('./db/functions/DBConfig.ini')
        # print(config.read('./db/functions/DBConfig.ini'))
        self.host = config['PostgresDB']['host']
        self.port = config['PostgresDB']['port']
        self.database = config['PostgresDB']['database']
        self.user = config['PostgresDB']['user']
        self.password = config['PostgresDB']['password']

    def insert_user(self,
                    team_name, gender, age, coach_name, team_city, team_state,
                    club_name, primary_contact, is_active, division, player_name):
        try:
            connection = psycopg2.connect(
                user=self.user,
                password=self.password,
                host=self.host,
                port=self.port,
                database=self.database,
            )
            cursor = connection.cursor()
            date_timestamp = datetime.now()
            insert_query = """ INSERT INTO public.teams (
            team_name,gender,age,coach_name,team_city,team_state,
            club_name,primary_contact,is_active,division,team_details_file_path)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) 
            RETURNING team_id"""
            record_to_insert = (
                team_name, gender, age, coach_name, team_city, team_state,
                club_name, primary_contact, is_active, division, player_name
            )

            cursor.execute(insert_query, record_to_insert)
            connection.commit()
            connection.close()
            return_msg = "User created successfully "
            return return_msg
        except (Exception, psycopg2.Error) as error:
            print("Failed to insert record into users table", error)
