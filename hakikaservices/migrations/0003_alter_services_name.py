# Generated by Django 4.2.7 on 2024-02-10 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hakikaservices', '0002_services_serviceimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='services',
            name='name',
            field=models.CharField(max_length=100, verbose_name='name'),
        ),
    ]
