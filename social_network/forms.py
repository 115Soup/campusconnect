from django import forms
from .models import User
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['content']
        content = forms.CharField(widget=forms.Textarea(attrs={'rows': 2}))  # Adjust attributes as needed


class FollowForm(forms.Form):
    user_to_follow = forms.IntegerField(widget=forms.HiddenInput)


class ProfilePhotoForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['profile_photo']
