import time

def getTime():
    timeEpoch = time.time()
    #epoch aint readable for me man
    timeRN = time.ctime(timeEpoch)
    return timeRN

def parseTime(date):
    #day, month, dayNum, hour, min, ssss
    print(date)
    parts = date.split(' ')
    parsedTime = {
            "hour": parts[3].split(':')[0],
            "minute": parts[3].split(':')[1],
            "seconds": parts[3].split(':')[2],
            "year": parts[4]
    }
    return parsedTime
        

print(f"Current time is: ", getTime())
print(f"Parsed time is: ", parseTime(getTime()))

def userInput(time):
    print(time)
    parsedTime = {
        "hour": time.split(':')[0],
        "minute": time.split(':')[1],
        "second": time.split(':')[2]
        }

def displayTime(time):
    parsedTime = {
        "hour": time.split(':')[0],
        "minute": time.split(':')[1],
        "second": time.split(':')[2]
    }
    return parsedTime

###I guess I forgot how client-server relationship goes so trying to calculate the countdown on the server side was a very complicated task as for one the response wasnt going to be sent until the timer reached 0 and trying to update it after every second was looking like a pain in the ass, I'm just gonna use js for that shit.

#def countdownTimer(userTime):
#
#    while userTime > 0:
#       minutes, seconds = divmod(userTime, 60)
#        hours, minutes = divmod(minutes, 60)
#        time_format = f'{minutes:02d}:{seconds:02d}'
#        print(time_format)
#        time.sleep(1)
#        userTime -= 1
        
#    if userTime == 0:
#        time_format = f'Timer is finished!!!'



