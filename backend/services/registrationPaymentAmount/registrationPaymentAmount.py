import json
import datetime as dt
from datetime import datetime
# from db.functions.DBTeamRegistration import User

class RegistrationPayment():

    # def _init_(self, ):
    #     self. = UPLOAD_FOLDER

    def registration_payment(self, request):
        print("hello")
        currentDate = dt.date.today()
        request_body = request.stream.read()
        json_data = json.loads(request_body)
        # registrationDate = datetime.strptime(json_data["date"], "%d-%m-%y")
        # registrationDate = datetime.now() - 15
        paymentInfo = json_data["payInfo"]

        # delta = registrationDate - currentDate
        delta = 15
        offerPay= paymentInfo - ((paymentInfo*15)/100)
        lateFee = paymentInfo + ((paymentInfo*10)/100)
        message = ""
        if(delta >45):
            message = "You are too early to register"
        elif(delta >30):
            message = "To register the team, you need to pay :" + str(offerPay)
        elif(delta >15):
            message = "To register the team, you need to pay " + str(paymentInfo)
        elif(delta >0):
            message = "To register the team, you need to pay " + str(lateFee)
        else:
            message = "You cannot make this payment, You are late for competition!"
        return {"message": message}



# if _name_ == "_main_":
#     sasa
