# Generated by Django 3.0.3 on 2020-04-17 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0004_auto_20200417_0845'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='toDate',
            field=models.DateField(auto_now_add=True),
        ),
    ]
