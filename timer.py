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

