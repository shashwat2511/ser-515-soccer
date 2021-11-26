import psycopg2
import configparser


class DBFilterMatches(object):

    def __init__(self):
        config = configparser.ConfigParser()
        config.read('./db/functions/DBConfig.ini')
        self.host = config['PostgresDB']['host']
        self.port = config['PostgresDB']['port']
        self.database = config['PostgresDB']['database']
        self.user = config['PostgresDB']['user']
        self.password = config['PostgresDB']['password']

    def filter_value_validation(self, division, day, venue, team_id, club_name):
        try:
            # division_check = False
            # day_check = False
            # venue_check = False
            # team_id_check = False
            # club_name_check = False
            print(division, day, venue, team_id, club_name)

            result = ""
            if len(division) > 0:
                result += "m.match_division='" + division + "'"
            if len(day) > 0:
                if result != "":
                    result += " AND "
                result += "m.match_date=TO_DATE('" + day + "','YYYY-MM-DD')"
            if len(venue) > 0:
                if result != "":
                    result += " AND "
                result += "m.field_id='" + venue + "'"
            if team_id is not None:
                if result != "":
                    result += " AND "
                result += "(m.team_1_id='" + str(team_id) + "'"
                result += " OR m.team_2_id='" + str(team_id) + "')"
            if len(club_name) > 0:
                if result != "":
                    result += " AND "
                result += "(t1.club_name='" + club_name
                result += "' OR t2.club_name='" + club_name + "')"
            return result

        except (Exception) as error:
            print("Failed to select record into teams table", error)

    def select_filtered_match_list(self, division=None, day=None, venue=None, team_id=None, club_name=None):
        try:
            connection = psycopg2.connect(
                user=self.user,
                password=self.password,
                host=self.host,
                port=self.port,
                database=self.database,
            )
            query_where_clause = self.filter_value_validation(division, day, venue, team_id, club_name)
            cursor = connection.cursor()
            select_query = """select array_agg(row_to_json(agg_tab)) from 
                            (SELECT m.match_division, m.match_date, m.match_time, m.ground_number,
                             m.team_1_id, m.team_2_id, f.field_id, t1.club_name as team_1_club_name,
                             t2.club_name as team_2_club_name
                            from public.match m
                            LEFT JOIN public.teams t1 ON m.team_1_id = t1.team_id
                            LEFT JOIN public.teams t2 ON m.team_2_id = t2.team_id
                            LEFT JOIN public.field f ON m.field_id = f.field_id
                            where %s) agg_tab
                            """

            cursor.execute(select_query % query_where_clause)
            match_json = cursor.fetchall()
            connection.close()
            return match_json[0][0]
        except (Exception, psycopg2.Error) as error:
            print("Failed to select record into teams table", error)






