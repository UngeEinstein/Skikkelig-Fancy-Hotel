# Generated by Django 3.0.3 on 2020-03-24 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0008_auto_20200324_1524'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='jacuzzi',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='room',
            name='minibar',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='room',
            name='oceanView',
            field=models.BooleanField(default=False),
        ),
    ]
