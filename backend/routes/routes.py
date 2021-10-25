from flask import Flask, request, Response, json
# url_for, send_from_directory, jsonify,  
# from flask_cors import CORS
# import json

from services.teamRegistration.TeamRegistration import TeamRegistration
from services.teamFeePayment.TeamFeePayment import TeamFeePayment
from services.registrationPaymentAmount.registrationPaymentAmount import RegistrationPayment
from services.fetchTeamListForTm.FetchTeamListForTm import FetchTeamListForTm

APP = Flask(__name__)
# CORS(APP)
# APP.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
# APP.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@APP.route("/", methods=['GET', 'POST'])
def index():
    return("Welcome to the Soccer Management System!!!")


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

@APP.route("/api/v1/teamfeepayment/", methods=['POST'])
def team_fee_payment():
    if request.method == 'POST':
        # print(request)
        trp = TeamFeePayment()
        return_data = trp.save_team_payment(request)

        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response

@APP.route("/api/v1/registrationPaymentAmount/", methods=['POST'])
def reg_payment_amount():
    if request.method == 'POST':
        print("rexcsdacquest")
        rp = RegistrationPayment()
        # request.data
        return_data = rp.registration_payment(request)
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
        return_data = ftl.team_reqistration(request)
        response = Response(
            response=json.dumps(return_data),
            status=200,
            mimetype='application/json'
        )
        return response