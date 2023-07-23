from django.http import HttpResponse
from .models import Board
import json

def hello_world(request) :
    test = {
        "id" : 1,
        "title" : "hello",
        "content" : "Hello_world!"}
    return HttpResponse(json.dumps(test))