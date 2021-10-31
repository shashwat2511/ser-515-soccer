import json
import psycopg2
from db.functions.DBTeamRegistration import User

class TeamRegistration():

    # def __init__(self, ):
    #     self. = UPLOAD_FOLDER

    def team_reqistration(self, request):
        request_body = request.stream.read()
        json_data = json.loads(request_body)
        team_name = json_data["team_name"]
        gender = json_data["gender"]
        age = json_data["age"]
        coach_name = json_data["coach_name"]
        team_city = json_data["team_city"]
        team_state = json_data["team_state"]
        club_name = json_data["club_name"]
        primary_contact = json_data["primary_contact"]
        is_active = json_data["is_active"]
        divison = json_data["divison"]
        player_name = json_data["player_name"]

        db = User()
        db.insert_user(team_name, gender, age, coach_name, team_city, team_state, club_name, primary_contact, is_active, divison, player_name)

        print(team_name)
        return "You have no teams registered"

# if __name__ == "__main__":
#     sasa