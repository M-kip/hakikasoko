!#/usr/bin/bash
pushd /home/musa/documents/hakikasoko
cp uwsgiConfig/uwsgi_hakika.ini /etc/uwsgi/uwsgi_hakika.ini
cp uwsgiConfig/uwsgi.service /etc/systemd/system/uwsgi.service
cp uwsgiConfig/uwsgi_run.sh /usr/local/bin/uwsgi_run.sh
popd