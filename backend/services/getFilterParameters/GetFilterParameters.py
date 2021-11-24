from db.functions.DBGetTeamDetail import DBGetTeamDetail

class GetFilterParameters():

    def get_division_list(self):
        db = DBGetTeamDetail()
        division_list = db.select_division_list()
        return division_list

    def get_age_group_list(self):
        db = DBGetTeamDetail()
        age_group_list = db.select_age_group_list()
        return age_group_list

    def get_gender_list(self):
        db = DBGetTeamDetail()
        gender_list = db.select_gender_list()
        return gender_list

    def get_team_list(self):
        db = DBGetTeamDetail()
        team_list = db.select_team_list()
        modified_for_filter = []
        for x in team_list:
            temp = {"team_id": x["team_id"]}
            if x["gender"] == "M":
                gender = "B"
            else:
                gender = "G"
            temp["filter_label"] = gender + str(x["age_group"]) + x["division"] \
                                   + " - " + x["team_name"] + " (" + x["coach_name"] + ")"
            modified_for_filter.append(temp)
        return modified_for_filter

    def get_all_filter_params(self):
        division_list = self.get_division_list()
        age_group_list = self.get_age_group_list()
        gender_list = self.get_gender_list()
        team_list = self.get_team_list()
        data = {
            "division" : division_list,
            "age_group": age_group_list,
            "gender": gender_list,
            "teams": team_list
        }
        return data
