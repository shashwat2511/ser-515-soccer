import json
import requests
class TeamFeePayment():

    # def __init__(self, ):
    #     self. = UPLOAD_FOLDER

    # def request_stream(self, req):
    #     req_body = req.stream.read()
    #     json_data = json.loads(req_body.decode('utf8'))
    #     return json_data

    def save_team_payment(self, request):
        # cwd = os.getcwd()
        # print(cwd)
        json_data = self.request_stream(request)
        print(json_data)
        s = json_data['team']
        return "Amount paid for team. You are now enrolled to the tournament."