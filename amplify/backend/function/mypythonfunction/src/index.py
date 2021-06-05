import json

def handler(event, context):
 body = {
     "message": "Hello from a late night hackathon!"
 }

 response = {
     "statusCode": 200,
     "body": json.dumps(body),
     "headers": {
         "Content-type": "application/json",
         "Access-Control-Allow-Origin": "*"
     }

 }

 return  response