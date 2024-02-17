!#/usr/bin/bash
pushd /home/musa/documents/hakikasoko
cp uwsgiConfig/uwsgi_hakika.ini /etc/uwsgi/
cp uwsgiConfig/uswgi.service /etc/systemd/system/
cp uwsgiConfig/uwsgi_run.sh /usr/local/bin/
popd