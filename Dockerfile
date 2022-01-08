FROM node:12

RUN npm install -g firebase-tools@8.20.0 create-react-app

WORKDIR /code

COPY docker/init.bash /init.bash

ENTRYPOINT [ "/init.bash" ]
