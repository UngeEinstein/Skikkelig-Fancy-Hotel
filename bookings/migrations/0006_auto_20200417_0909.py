# Generated by Django 3.0.3 on 2020-04-17 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0005_auto_20200417_0907'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='fromDate',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='booking',
            name='timestamp',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='booking',
            name='toDate',
            field=models.DateField(blank=True),
        ),
    ]
