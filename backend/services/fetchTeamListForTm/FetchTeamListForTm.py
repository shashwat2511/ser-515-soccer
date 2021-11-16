from db.functions.DBFetchTeamListForTm import DBFetchTeamListForTm

class FetchTeamListForTm():

    def get_registered_team_list(self):
        # req_data = request.stream.read()
        # json_data = json.loads(req_data)
        # team_id = json_data['team_id']
        dftl = DBFetchTeamListForTm()
        enrolled_team_list_data = dftl.select_registered_team_list()
        return_data = {
            "enrolled_teams": enrolled_team_list_data
        }
        return return_data



# if _name_ == "_main_":
#     sasa
