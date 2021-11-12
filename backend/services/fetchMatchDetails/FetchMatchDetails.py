import json
import psycopg2
from db.functions.DBTeamRegistration import DBTeamRegistration

class FetchMatchDetails():

    def team_registration(self, request):
        request_body = request.stream.read()
        json_data = json.loads(request_body)
        team_name = json_data["team_name"]
        gender = json_data["gender"]
        age_group = json_data["age_group"]
        coach_name = json_data["coach_name"]
        team_city = json_data["team_city"]
        team_state = json_data["team_state"]
        club_name = json_data["club_name"]
        primary_contact = json_data["primary_contact"]
        division = json_data["division"]
        player_names = json_data["player_names"]

        db = DBTeamRegistration()
        db.insert_team(team_name, gender, age_group, coach_name, team_city, team_state, club_name, primary_contact, division, player_names)

        message = "Your team " + team_name +" has been registered. Please pay the due about to enroll to tournament"

        return {"message": message}


# if __name__ == "__main__":
#     sasa
