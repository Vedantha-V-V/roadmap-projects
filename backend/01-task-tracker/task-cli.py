import json
import sys
import datetime

args = sys.argv

if len(args) == 1:
    print("No sufficient arguments passed")
    exit(1)

try:
    with open('task.json','r+') as file:
        task_json = json.load(file)
except:
    task_json = {}
    with open('task.json','w+') as file:
        json.dump({},file)

action = args[1]

match(action):
    case 'add':
        if len(args) == 2:
            print("Task not found")
            exit(1)
        task = args[len(args)-1]
        created_at = datetime.datetime.now().isoformat()
        updated_at = datetime.datetime.now().isoformat()
        task_json[len(task_json)+1] = [task,"not done",created_at,updated_at]
    case 'delete':
        print("Entered")
        if len(args) == 2 or not int(args[2]):
            print("Invalid delete parameters")
            exit(1)
        id = args[2]
        print(task_json.values())
        print(args[2])
        if args[2] not in task_json.keys():
            print("Task not found")
            exit(1)
        task_json.pop(id)
    case 'update':
        if len(args) <= 3 or not int(args[2]):
            print("Invalid update parameters")
            exit(1)
        id = args[2]
        task_details = task_json[id]
        task_details[0] = args[len(args)-1]
        new_date = datetime.datetime.now().isoformat()
        task_details[2] = new_date
        task_json[id] = task_details
    case 'mark-in-progress':
        if len(args) == 2 or not int(args[2]):
            print("Invalid ID parameters")
            exit(1)
        id = args[2]
        task_json[id][1] = 'mark-in-progress'
    case 'mark-done':
        if len(args) == 2 or not int(args[2]):
            print("Invalid ID parameters")
            exit(1)
        id = args[2]
        task_json[id][1] = 'mark-in-progress'
    case 'list':
        for key,value in task_json.items():
            print(value[0])
    case _:
        print("Not found")

with open('task.json','w+') as file:
    json.dump(task_json,file)