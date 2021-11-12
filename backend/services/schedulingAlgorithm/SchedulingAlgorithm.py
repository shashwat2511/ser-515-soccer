class SchedulingAlgorithm():
    def __init__(self, days, column):
        # self.slots = list(list([None] * column))
        self.slots = list()
        for i in range(days):
            x = list()
            for j in range(column):
                x.append(None)
            self.slots.append(x)



        self.days = days
        self.column = column

    def team_scheduling_algorithm(self, teams):
        # scheduleTeams(slots, teams, days, column)
        teams_count = 0
        # end = False
        for i in range(self.days):
            for j in range(self.column):
                if teams_count == len(teams):
                    return
                self.slots[i][j] = (teams[teams_count], teams[teams_count + 1])
                teams_count += 2
                # slots.append(temp)
            # if end == True:
            #     break
        # print(slots)

    # team_schedule_to_slot()



obj = SchedulingAlgorithm(20, 6)
obj.team_scheduling_algorithm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16])
print(obj.slots)


