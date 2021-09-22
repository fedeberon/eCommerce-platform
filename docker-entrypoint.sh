#!/bin/bash
set -ex
cd /usr/local/app
exec java -jar "bin/web-0.0.1-SNAPSHOT.jar"