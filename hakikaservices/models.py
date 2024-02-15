from django.db import models

# Create your models here.
class Services(models.Model):
    '''This class represents the underlying database table'''

    name = models.CharField('name', max_length=100)
    description = models.TextField('description')
    serviceImage = models.ImageField('Product Image1', upload_to="images/%Y/%m/%d/", null=True, blank=True)
    def __str__(self) -> str:
        return 'service name: {}'.format(self.name)