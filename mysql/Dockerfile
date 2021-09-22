# Derived from official mysql image (our base image)
FROM mysql
# Add a database
ENV MYSQL_DATABASE alertacomunitaria
ENV MYSQL_ROOT_PASSWORD root!
ENV MYSQL_USER root
ENV MYSQL_PASSWORD root!

# Add the content of the sql-scripts/ directory to your image
# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
COPY sql-scripts/ /docker-entrypoint-initdb.d/
CMD ["mysqld"]
EXPOSE 3306 3306