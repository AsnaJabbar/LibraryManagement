from django.contrib import admin
from .models import Author, Book, Borrower

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email')
    search_fields = ('name', 'email')

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'published_date', 'available_copies')
    list_filter = ('author',)
    search_fields = ('title',)

@admin.register(Borrower)
class BorrowerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'book', 'borrowed_date', 'return_date')
    list_filter = ('borrowed_date',)
