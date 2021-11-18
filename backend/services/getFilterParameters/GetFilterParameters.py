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

    def get_all_filter_params(self):
        division_list = self.get_division_list()
        age_group_list = self.get_age_group_list()
        gender_list = self.get_gender_list()
        data = {
            "division" : division_list,
            "age_group": age_group_list,
            "gender": gender_list
        }
        return data
