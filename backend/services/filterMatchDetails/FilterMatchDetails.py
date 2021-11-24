import json
import psycopg2
from db.functions.DBFilterMatches import DBFilterMatches

class FilterMatchDetails():

    def filter_matches(self, request):
        request_body = request.stream.read()
        json_data = json.loads(request_body)

        division = json_data.get("division")
        day = json_data["day"]
        venue = json_data["venue"]
        team_id = json_data["team_id"]
        club_name = json_data["club_name"]

        dbfm = DBFilterMatches()
        filtered_matches = dbfm.select_filtered_match_list(division, day, venue, team_id, club_name)
        return {"matches": filtered_matches if filtered_matches is not None else []}
