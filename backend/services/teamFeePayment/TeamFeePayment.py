import json
class TeamFeePayment():

    # def __init__(self, ):
    #     self. = UPLOAD_FOLDER

    def request_stream(self, req):
        req_body = req.stream.read()
        json_data = json.loads(req_body.decode('utf8'))
        return json_data

    def save_team_payment(self, req):
        # cwd = os.getcwd()
        # print(cwd)
        json_data = request_stream(req)
        print(json_data)
        s = json_data['team']
        return "You have no teams registered"