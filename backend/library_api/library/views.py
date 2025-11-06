from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status
from .models import Author, Book, Borrower
from .serializers import AuthorSerializer, BookSerializer, BorrowerSerializer

#book api
@api_view(['GET', 'POST'])
def book_list_create(request):
    if request.method == 'GET':
        books = Book.objects.select_related('author').all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        print("hello")
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#author api
@api_view(['GET', 'POST'])
def author_list_create(request):
    if request.method == 'GET':
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#borrower api
@api_view(['GET', 'POST'])
def borrower_list_create(request):
    if request.method == 'GET':
        borrowers = Borrower.objects.select_related('book').all()
        serializer = BorrowerSerializer(borrowers, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BorrowerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # BorrowerSerializer handles copy reduction
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
