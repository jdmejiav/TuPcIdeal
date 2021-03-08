from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView

app_name = 'api'

urlpatterns = [
    path('registrer/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),name='blacklist')
]