from flask import Flask, request, Response, json
# url_for, send_from_directory, jsonify,  
from flask_cors import CORS
import json
from services.teamRegistration.TeamRegistration import TeamRegistration
from services.teamFeePayment.TeamFeePayment import TeamFeePayment
from services.generateTeamRegistrationAmount.GenerateTeamRegistrationAmount import GenerateTeamRegistrationAmount
from services.fetchTeamListForTm.FetchTeamListForTm import FetchTeamListForTm
from services.getFilterParameters.GetFilterParameters import GetFilterParameters
from services.schedulingAlgorithm.SchedulingAlgorithm import SchedulingAlgorithm


APP = Flask(__name__)


CORS(APP)
# APP.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
# APP.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@APP.route("/api/v1/testPost/", methods=['POST'])
def test_post():
    if request.method == 'POST':
        import json
        req_data = request.stream.read()
        json_data = json.loads(req_data)
        print(json_data["team_id"])
        return_data = {
            "message": "success",
            "payment_amount": json_data["payment_amount"]
        }

        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response


@APP.route("/", methods=['GET', 'POST'])
def index():
    return ("Welcome to the Soccer Management System!!!")


@APP.route("/api/v1/teamRegistration/", methods=['POST'])
def team_registration():
    if request.method == 'POST':
        ctr = TeamRegistration()
        return_data = ctr.team_registration(request)
        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response


@APP.route("/api/v1/generateTeamRegistrationAmount/", methods=['GET'])
def generate_team_registration_amount():
    if request.method == 'GET':
        gtra = GenerateTeamRegistrationAmount()
        return_data = gtra.registration_payment()
        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response


@APP.route("/api/v1/teamFeePayment/", methods=['POST'])
def team_fee_payment():
    if request.method == 'POST':
        trp = TeamFeePayment()
        return_data = trp.save_team_payment(request)

        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response


@APP.route("/api/v1/fetchTeamListForTm/", methods=['GET'])
def fetch_team_list_for_tm():
    if request.method == 'GET':
        ftl = FetchTeamListForTm()
        return_data = ftl.get_registered_team_list()
        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response


@APP.route("/api/v1/getFilterParams/", methods=['GET'])
def get_filter_params():
    if request.method == 'GET':
        gfp = GetFilterParameters()
        return_data = gfp.get_all_filter_params()
        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response


@APP.route("/api/v1/scheluleMatches/", methods=['GET'])
def schelule_matches():
    if request.method == 'GET':
        sa = SchedulingAlgorithm()
        return_data = sa.execute_scheduler()
        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response
