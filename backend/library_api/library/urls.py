from django.urls import path
from . import views

urlpatterns = [
    path('authors/', views.author_list_create, name='authors'),
    path('books/', views.book_list_create, name='books'),
    path('borrowers/', views.borrower_list_create, name='borrowers'),
]
