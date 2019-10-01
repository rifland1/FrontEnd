Pour lancer le projet:

ng serve --open

url de test : http://localhost:4200

pour tester l'authentification:  http://localhost:4200/login

ng serve --host localhost --proxy-config proxy.conf.json --base-href /app/


###################
Configuration Apache 
###################
<VirtualHost *:80>

ProxyPass /api http://localhost:8080/api
ProxyPassReverse /api http://localhost:8080/api


ProxyPass /gui http://localhost:4200/gui/
ProxyPassReverse /gui http://localhost:4200/gui/

</VirtualHost>
