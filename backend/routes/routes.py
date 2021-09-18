from flask import Flask, request, Response, json
# url_for, send_from_directory, jsonify,  
# from flask_cors import CORS
# import json

from services.coachTeamRegistration.CoachTeamRegistration import CoachTeamRegistration

APP = Flask(__name__)
# CORS(APP)
# APP.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
# APP.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@APP.route("/", methods=['GET', 'POST'])
def index():
    return("Welome to the Soccer Management System!!!")


@APP.route("/api/v1/coachTeamReg/", methods=['GET'])
def coach_team_reg():
    if request.method == 'GET':
        # print(request)
        ctr = CoachTeamRegistration()
        return_data = ctr.welcome()

        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response