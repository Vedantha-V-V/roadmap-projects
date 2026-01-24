import sys
import requests

args = sys.argv

uname = args[len(args)-1]

url = f"https://api.github.com/users/{uname}/events"

class ResponseError(Exception):
    def __init__(self, message):
        super().__init__(message) 

try:
    response = requests.get(url)
    status = response.status_code
    print(status)
    if(status==404):
        raise ResponseError("Username Not Found")
    data = response.json()
except ResponseError as e:
    print(f"Error: {e}")
    exit(1)

activities = []

i=0
while(i<len(data)):
    event = data[i]
    if event['type'].__eq__("PushEvent"):
        count=0
        target_repo = event['repo']['name']
        while(i<len(data) and data[i]['repo']['name'].__eq__(target_repo)):
            count+=1
            i+=1
        result = f"Pushed {count} commits to {target_repo}"
        activities.append(result)
        continue
    elif event['type'].__eq__("CommitCommentEvent"):
        result = f"Created a commit comment to {event['repo']['name']}"
    elif event['type'].__eq__("CreateEvent"):
        result = f"Created {event['payload']['ref_type']} {event['payload']['ref']} to {event['repo']['name']}"
    elif event['type'].__eq__("DeleteEvent"):
        result = f"Deleted {event['payload']['ref_type']} {event['payload']['ref']} to {event['repo']['name']}"
    elif event['type'].__eq__("DiscussionEvent"):
        result = f"Opened a discussion to {event['repo']['name']}"
    elif event['type'].__eq__("ForkEvent"):
        result = f"Forked {event['repo']['name']}"
    elif event['type'].__eq__("GollumEvent"):
        result = f"Created a wiki page to {event['repo']['name']}"
    elif event['type'].__eq__("IssueCommentEvent"):
        pronoun = "a new" if(event['payload']['action'] == 'created') else 'a'
        result = f"{event['payload']['action'].capitalize()} {pronoun} comment to {event['repo']['name']}"
    elif event['type'].__eq__("IssuesEvent"):
        pronoun = "a new" if(event['payload']['action'] == 'created') else 'an'
        result = f"{event['payload']['action'].capitalize()} {pronoun} issue in {event['repo']['name']}"
    elif event['type'].__eq__("MemberEvent"):
        result = f"Updated member rules to {event['repo']['name']}"
    elif event['type'].__eq__("PublicEvent"):
        result = f"{event['repo']['name']} was made public."
    elif event['type'].__eq__("PullRequestEvent"):
        result = f"Opened a pull request to {event['repo']['name']}"
    elif event['type'].__eq__("PullRequestReviewCommentEvent"):
        result = f"Reviewed comment for {event['repo']['name']}"
    elif event['type'].__eq__("ReleaseEvent"):
        result = f"Updated the release for {event['repo']['name']}"
    else:
        result = f"Starred {event['repo']['name']}"
    i+=1
    activities.append(result)

for activity in activities:
    print(f"- {activity}")