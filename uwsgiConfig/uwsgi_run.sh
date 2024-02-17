!#/usr/bin/env bash
source /home/musa/documents/venv/bin/activate
pushd  /home/musa/documents/hakikasoko
python manage.py collectstatic

if [[ $? != 0 ]]; then
    echo "can't collect static"
    exit 2
fi
popd

exec uwsgi --ini /etc/uwsgi/uwsgi_hakika.ini
