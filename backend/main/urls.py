from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from .views import GoogleLoginRedirectView, GoogleCallbackView

urlpatterns = [
    # URL to initiate the Google OAuth flow
    path('auth/google/login/', GoogleLoginRedirectView.as_view(), name='google_login'),
    
    # URL to handle the callback from Google
    path('auth/google/callback/', GoogleCallbackView.as_view(), name='google_callback'),
    
    # Optional: Direct token endpoint for mobile apps or other scenarios
    # path('auth/google/', GoogleLoginView.as_view(), name='google_token_login'),

    # Spectacular Schema & Swagger UI
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path("docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
]