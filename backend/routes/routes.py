from flask import Flask, request, Response, json
# url_for, send_from_directory, jsonify,  
# from flask_cors import CORS
# import json

from services.teamRegistration.TeamRegistration import TeamRegistration

APP = Flask(__name__)
# CORS(APP)
# APP.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
# APP.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@APP.route("/", methods=['GET', 'POST'])
def index():
    return("Welome to the Soccer Management System!!!")


@APP.route("/api/v1/coachTeamReg/", methods=['POST'])
def coach_team_reg():
    if request.method == 'POST':
        # print(request)
        ctr = TeamRegistration()
        # request.data
        return_data = ctr.team_reqistration(request)

        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response