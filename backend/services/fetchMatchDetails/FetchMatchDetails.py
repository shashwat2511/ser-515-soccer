import json
from db.functions.DBScheduleMatches import DBScheduleMatches

class FetchMatchDetails():

    def get_matches(self):
        dsm = DBScheduleMatches()
        matches = dsm.select_all_matches()
        return {"matches": matches}