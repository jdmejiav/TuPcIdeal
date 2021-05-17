from django.apps import AppConfig
from apscheduler.schedulers.background import BackgroundScheduler


class FormsConfig(AppConfig):
    name = 'Forms'

    def ready(self):
        from .Data_analysis import WebScraping as ws
        ws.startServ()
        scheduler = BackgroundScheduler()
        scheduler.add_job(ws.startServ, 'interval', minutes=120)
        scheduler.start()
