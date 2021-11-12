import json
import datetime as dt
# from datetime import datetime
from db.functions.DBTournamentDetails import DBTournamentDetails

class GenerateTeamRegistrationAmount():

    def registration_payment(self):
        dbtd = DBTournamentDetails()
        tournament_details = dbtd.get_tournament_details()

        currentDate = dt.date.today()
        registrationDate = dt.datetime.strptime(tournament_details[0]['payment_due_date'], "%Y-%m-%d")
        # paymentInfo = json_data["payInfo"]
        paymentInfo = int(tournament_details[0]['tournament_fee'])
        print(currentDate.strftime('%Y-%m-%d'))
        print(registrationDate.strftime('%Y-%m-%d'))

        delta = registrationDate.strftime('%Y-%m-%d') - currentDate.strftime('%Y-%m-%d')
        # print(delta)
        # delta = 15
        offerPay = paymentInfo - ((paymentInfo * 15) / 100)
        lateFee = paymentInfo + ((paymentInfo * 10) / 100)
        message = ""
        if (delta > 45):
            message = "You are too early to register"
        elif (delta > 30):
            message = "To register the team, you need to pay :" + str(offerPay)
        elif (delta > 15):
            message = "To register the team, you need to pay " + str(paymentInfo)
        elif (delta > 0):
            message = "To register the team, you need to pay " + str(lateFee)
        else:
            message = "You cannot make this payment, You are late for competition!"
        return {"message": message}


# if __name__ == "__main__":
#     gtra = GenerateTeamRegistrationAmount()
#     gtra.registration_payment()
