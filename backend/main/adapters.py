from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter

class CustomAccountAdapter(DefaultAccountAdapter):
    def populate_username(self, request, user):
        # Skip username population
        pass

class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
    def populate_username(self, request, sociallogin, data):
        # Skip username population
        pass
    
    def populate_user(self, request, sociallogin, data):
        user = super().populate_user(request, sociallogin, data)
        # Ensure email is always set
        if not user.email and sociallogin.account.extra_data.get('email'):
            user.email = sociallogin.account.extra_data.get('email')
        return user