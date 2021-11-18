import json
from db.functions.DBTeamFeePayment import DBTeamFeePayment

class TeamFeePayment():

    def save_team_payment(self, request):
        req_data = request.stream.read()
        json_data = json.loads(req_data)
        team_id = json_data['team_id']
        payment_amount = json_data['payment_amount']

        dtfp = DBTeamFeePayment()
        check_team_fee_paid_data = dtfp.select_team_fee_payment(team_id)
        payment_detail = {}
        if check_team_fee_paid_data is not None:
            if len(check_team_fee_paid_data) == 1:
                payment_detail = dtfp.insert_team_fee_payment(team_id, payment_amount)
        return_data = {
            "message": payment_detail.get("message"),
            "team_id": team_id,
            "payment_success": payment_detail.get("payment_success")
        }
        return return_data