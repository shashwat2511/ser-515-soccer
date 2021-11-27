import json
from db.functions.DBTeamRegistration import DBTeamRegistration

class TeamRegistration():

    def team_registration(self, request):
        request_body = request.stream.read()
        json_data = json.loads(request_body)
        print(json_data)
        team_name = json_data["team_name"].lower()
        gender = json_data["gender"].lower()
        age_group = json_data["age_group"].lower()
        coach_name = json_data["coach_name"].lower()
        team_city = json_data["team_city"].lower()
        team_state = json_data["team_state"].lower()
        club_name = json_data["club_name"].lower()
        primary_contact = json_data["primary_contact"].lower()
        division = json_data["division"].lower()
        player_names = json_data["player_names"].lower()

        db = DBTeamRegistration()
        inserted_team_id = db.insert_team(
            team_name, gender, age_group, coach_name, team_city,
            team_state, club_name, primary_contact, division, player_names
        )

        message = "Your team " + team_name +" has been registered. Please pay the due about to enroll to tournament"

        return {
            "team_id": inserted_team_id,
            "message": message
        }


# if __name__ == "__main__":
#     sasa
