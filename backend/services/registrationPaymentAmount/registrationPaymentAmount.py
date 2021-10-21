import json
import datetime as dt
from db.functions.DBTeamRegistration import User

class RegistrationPayment():

    # def _init_(self, ):
    #     self. = UPLOAD_FOLDER

    def registration_payment(self, request):
        currentDate = dt.date.today()
        request_body = request.stream.read()
        json_data = json.loads(request_body)
        registrationDate = json_data["date"]
        paymentInfo = json_data["payInfo"]
        delta = registrationDate - currentDate
        offerPay= paymentInfo - ((paymentInfo*15)/100)
        lateFee = paymentInfo + ((paymentInfo*10)/100)
        if(delta.days >45):
            print("You are too early to register")
        elif(delta.days >30):
            print("To register the team, you need to pay:",offerPay)
        elif(delta.days >15):
            print("To register the team, you need to pay", paymentInfo)
        elif(delta.days >0):
            print("To register the team, you need to pay", lateFee)
        else:
            print("You cannot make this payment, You are late for competition!")



# if _name_ == "_main_":
#     sasa
