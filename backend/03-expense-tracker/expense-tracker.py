import argparse
import json
import datetime

parser = argparse.ArgumentParser(
    prog='expense-tracker',
    description='Calculate expenses',
    epilog='expenses'
)

parser.add_argument('action')
parser.add_argument('--description')
parser.add_argument('--amount')
parser.add_argument('--id')
parser.add_argument('--month')

args = parser.parse_args()

try:
    with open('expenses.json','r+') as file:
        expenses_json = json.load(file)
except:
    expenses_json = {}
    with open('expenses.json','w+') as file:
        json.dump({},file)

if args.action.__eq__('add'):
    try:
        desc = args.description
        amt = int(args.amount)
        date = datetime.datetime.now().isoformat()[:10]
        if(not desc):
            print("No description provided.")
            exit(1)
        if(amt<0):
            raise Exception
        expenses_json[len(expenses_json)+1]=[date,desc,f"{amt}"]  
        print(f"# Expense added successfully (ID: {len(expenses_json)}).") 
    except:
        print("Amount entered must be positive number.")
        exit(1)
elif args.action.__eq__('list'):
    # Count the pad values
    max_pad_id,max_pad_date,max_pad_desc,max_pad_amt = 2,4,11,6
    for expense in expenses_json.items():
        if(len(expense[0])>max_pad_id):
            max_pad_id = len(expense[0])
        if(len(expense[1][0])>max_pad_date):
            max_pad_date = len(expense[1][0])
        if(len(expense[0])>max_pad_desc):
            max_pad_desc = len(expense[1][1])
        if(len(expense[0])>max_pad_amt):
            max_pad_amt = len(expense[1][2])
    print(max_pad_id,max_pad_date,max_pad_desc,max_pad_amt)
    # Building of table
    header = f"# ID{" "*(max_pad_id-2)} Date{" "*(max_pad_date-4)} Description{" "*(max_pad_desc-11)} Amount{" "*(max_pad_id-5)}"
    print(header)
    for expense in expenses_json.items():
        row = f"# {expense[0]}{" "*(max_pad_id-len(expense[0]))} {expense[1][0]}{" "*(max_pad_date-len(expense[1][0]))} {expense[1][1]}{" "*(max_pad_desc-len(expense[1][1]))} {expense[1][2]}{" "*(max_pad_amt-len(expense[1][2]))}"
        print(row)
elif args.action.__eq__('summary'):
    sum=0
    try:
        mnt = int(args.month)
        for expense in expenses_json.values():
            if mnt:
                if int(expense[0][5:7])==mnt:
                    sum+=int(expense[len(expense)-1])
            else:
                sum+=int(expense[len(expense)-1])    
        print(f'Total expenses: ${sum}')
    except:
        print("Month must be a positive number.")
elif args.action.__eq__('delete'):
    id = args.id
    try:
        expenses_json.pop(id)
        expenses = list(expenses_json.values())
        expenses_json = {}
        for i in range(1,len(expenses)+1):
            expenses_json[i] = expenses[i-1]
        print("Expense delete successfully")
    except:
        print("Invalid ID")

with open('expenses.json','w+') as file:
    json.dump(expenses_json,file)