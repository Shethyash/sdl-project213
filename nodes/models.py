from datetime import datetime

from django.db import models


# Create your models here.


class Nodes(models.Model):
    name = models.CharField(max_length=100)
    user_id = models.IntegerField(default=0)
    status = models.BooleanField(default=False)
    description = models.TextField(default='')
    latitude = models.FloatField()
    longitude = models.FloatField()
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.name


class Feeds(models.Model):
    node_id = models.IntegerField()
    temperature = models.FloatField(null=True)
    humidity = models.FloatField(null=True)
    LWS = models.FloatField(null=True)
    soil_temperature = models.FloatField(null=True)
    soil_moisture = models.FloatField(null=True)
    battery_status = models.FloatField(null=True)
    created_at = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.node_id
