import json
from db.functions.DBMatchScoreUpdate import DBMatchScoreUpdate

class UpdateMatchScore():

    def scores_update(self, request):
        request_body = request.stream.read()
        json_data = json.loads(request_body)

        team_1_name = json_data["team_1_name"]
        team_2_name = json_data["team_2_name"]
        team_1_goal = json_data["team_1_goal"]
        team_2_goal = json_data["team_2_goal"]
        match_stage = json_data["match_stage"]
        winner = json_data["winner"]
        match_result = json_data["match_result"]

        dmsu = DBMatchScoreUpdate()
        msg = dmsu.update_team_score(team_1_name, team_2_name, team_1_goal, team_2_goal, match_stage, winner, match_result)

        return_data = {
            "message": msg
        }
        return return_data
