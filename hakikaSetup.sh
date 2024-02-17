!#/usr/bin/bash
pushd /home/musa/documents/hakikasoko
copy uwsgiConfig/uwsgi_hakika.ini /etc/uwsgi/
copy uwsgiConfig/uswgi.service /etc/systemd/system/
copy uwsgiConfig/uwsgi_run.sh /usr/local/bin/
popd