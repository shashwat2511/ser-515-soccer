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
        print(delta.days)
        offerPay= paymentInfo - ((paymentInfo*15)/100)
        lateFee = paymentInfo + ((paymentInfo*10)/100)
        print(offerPay, lateFee)



# if _name_ == "_main_":
#     sasa
