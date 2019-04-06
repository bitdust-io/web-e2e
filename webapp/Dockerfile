FROM httpd:2.4

RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

RUN git clone https://github.com/bitdust-io/web.git

RUN cd web/dist/ &&\
    cp -r * /usr/local/apache2/htdocs/

RUN rm -rf web

EXPOSE 80
