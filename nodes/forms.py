from django import forms

from .models import Nodes


class RegisterForm(forms.ModelForm):
    name = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(
            attrs={'placeholder': 'Name', 'class': 'form-control'}
        )
    )
    description = forms.CharField(
        max_length=100,
        required=False,
        widget=forms.Textarea(
            attrs={'placeholder': 'add description', 'class': 'form-control', 'rows': 5}
        )
    )
    status = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.RadioSelect(
            choices=((True, 'Active'), (False, 'Inactive')),
            attrs={'class': 'form-check-input'}
        )
    )
    latitude = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(
            attrs={'placeholder': 'latitude', 'class': 'form-control'}
        )
    )
    longitude = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(
            attrs={'placeholder': 'longitude', 'class': 'form-control'}
        )
    )

    class Meta:
        model = Nodes
        fields = ['name', 'status', 'description', 'latitude', 'longitude']
